import { NextResponse } from 'next/server';
import { supabaseRest } from '@/lib/supabase-rest';

type Params = {
    params: {
        id: string;
    };
};

const ADMIN_STATUSES = new Set(['approved', 'pending', 'rejected']);

function assertAdminToken(request: Request) {
    const token = request.headers.get('x-admin-token');
    if (!token || token !== process.env.INTENTIONS_ADMIN_TOKEN) {
        return false;
    }
    return true;
}

export async function PATCH(request: Request, { params }: Params) {
    if (!assertAdminToken(request)) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
        return NextResponse.json({ message: 'ID inválido.' }, { status: 400 });
    }

    try {
        const body = await request.json();
        const status = body?.status;

        if (!ADMIN_STATUSES.has(status)) {
            return NextResponse.json(
                { message: 'Estado inválido.' },
                { status: 400 }
            );
        }

        const response = await supabaseRest(
            `intentions?id=eq.${encodeURIComponent(id)}`,
            {
                method: 'PATCH',
                body: JSON.stringify({ status }),
            },
            { prefer: 'return=representation' }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Supabase error (PATCH admin intention)', errorText);
            return NextResponse.json(
                { message: 'No se pudo actualizar la intención.' },
                { status: 500 }
            );
        }

        const [record] = await response.json();

        return NextResponse.json({ intention: record });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocurrió un error inesperado.' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request, { params }: Params) {
    if (!assertAdminToken(request)) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
        return NextResponse.json({ message: 'ID inválido.' }, { status: 400 });
    }

    try {
        const response = await supabaseRest(
            `intentions?id=eq.${encodeURIComponent(id)}`,
            {
                method: 'DELETE',
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Supabase error (DELETE intention)', errorText);
            return NextResponse.json(
                { message: 'No se pudo eliminar la intención.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Eliminada' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocurrió un error inesperado.' },
            { status: 500 }
        );
    }
}
