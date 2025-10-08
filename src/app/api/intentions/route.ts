import { NextResponse } from 'next/server';
import { notifyNewIntention } from '@/lib/notifications';
import { supabaseRest } from '@/lib/supabase-rest';

type IntentionPayload = {
    name?: string;
    message?: string;
    category?: string;
    anonymous?: boolean;
};

const ALLOWED_CATEGORIES = ['gratitude', 'petition', 'youth', 'family'] as const;
const MAX_NAME_LENGTH = 80;
const MIN_MESSAGE_LENGTH = 12;
const MAX_MESSAGE_LENGTH = 500;

function sanitizeText(value: string) {
    const normalized = value.replace(/\r\n/g, '\n');
    const trimmedLines = normalized
        .split('\n')
        .map((line) => line.trim().replace(/\s+/g, ' '))
        .filter((line, index, lines) => !(line === '' && lines[index - 1] === ''))
        .join('\n');

    return trimmedLines
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();
}

function containsUrl(value: string) {
    return /(https?:\/\/|www\.|mailto:|tel:)/i.test(value);
}

function validatePayload(payload: IntentionPayload) {
    const errors: string[] = [];

    const name = sanitizeText((payload.name ?? '').slice(0, MAX_NAME_LENGTH));
    const message = sanitizeText(payload.message ?? '');

    if (!payload.category || !ALLOWED_CATEGORIES.includes(payload.category as any)) {
        errors.push('Categoría inválida.');
    }

    if (!message || message.length < MIN_MESSAGE_LENGTH) {
        errors.push('El mensaje es demasiado corto.');
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
        errors.push('El mensaje es demasiado largo.');
    }

    if (containsUrl(message)) {
        errors.push('No se permiten enlaces en el mensaje.');
    }

    if (name && containsUrl(name)) {
        errors.push('No se permiten enlaces en el nombre.');
    }

    return {
        errors,
        data: {
            name: name || 'Devoto anónimo',
            message,
            category: payload.category as (typeof ALLOWED_CATEGORIES)[number],
            anonymous: payload.anonymous ?? !name,
        },
    };
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const status = url.searchParams.get('status') || 'approved';
        const limit = Math.min(
            Number(url.searchParams.get('limit') || 100),
            500
        ).toString();

        const isAdminRequest = status !== 'approved';
        if (isAdminRequest) {
            const token = request.headers.get('x-admin-token');
            if (!token || token !== process.env.INTENTIONS_ADMIN_TOKEN) {
                return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
            }
        }

        const params = new URLSearchParams();
        params.set(
            'select',
            'id,name,message,category,status,anonymous,prayer_count,created_at'
        );
        params.set('order', 'created_at.desc');
        params.set('limit', limit);
        params.set('status', `eq.${status}`);

        const response = await supabaseRest(`intentions?${params.toString()}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Supabase error (GET intentions)', errorText);
            return NextResponse.json(
                { message: 'No se pudo obtener la información.' },
                { status: 500 }
            );
        }

        const data = await response.json();
        return NextResponse.json({ intentions: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocurrió un error inesperado.' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const payload: IntentionPayload = await request.json();
        const validation = validatePayload(payload);

        if (validation.errors.length > 0) {
            return NextResponse.json(
                { message: validation.errors.join(' ') },
                { status: 400 }
            );
        }

        const insertPayload = {
            ...validation.data,
            status: 'pending',
            prayer_count: 0,
        };

        const response = await supabaseRest('intentions', {
            method: 'POST',
            body: JSON.stringify(insertPayload),
        }, { prefer: 'return=representation' });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Supabase error (POST intention)', errorText);
            return NextResponse.json(
                { message: 'No se pudo registrar la intención.' },
                { status: 500 }
            );
        }

        const [record] = await response.json();

        notifyNewIntention({
            id: record.id,
            name: record.name,
            message: record.message,
            category: record.category,
            createdAt: record.created_at,
        }).catch((error) =>
            console.error('Email notification failed', error)
        );

        return NextResponse.json(
            { message: 'La intención quedó pendiente de moderación.', status: 'pending' },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocurrió un error inesperado.' },
            { status: 500 }
        );
    }
}
