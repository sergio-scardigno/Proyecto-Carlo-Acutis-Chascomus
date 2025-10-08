import { NextResponse } from 'next/server';
import { supabaseRest } from '@/lib/supabase-rest';

type Params = {
    params: {
        id: string;
    };
};

export async function POST(_request: Request, { params }: Params) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: 'ID inválido.' }, { status: 400 });
    }

    try {
        const fetchResponse = await supabaseRest(
            `intentions?select=id,prayer_count,status&limit=1&id=eq.${encodeURIComponent(id)}`
        );

        if (!fetchResponse.ok) {
            const errorText = await fetchResponse.text();
            console.error('Supabase error (GET prayer count)', errorText);
            return NextResponse.json(
                { message: 'No se pudo actualizar la intención.' },
                { status: 500 }
            );
        }

        const [record] = await fetchResponse.json();

        if (!record) {
            return NextResponse.json({ message: 'Intención no encontrada.' }, { status: 404 });
        }

        if (record.status !== 'approved') {
            return NextResponse.json(
                { message: 'Sólo se pueden sumar oraciones a intenciones aprobadas.' },
                { status: 403 }
            );
        }

        const updatedCount = Number(record.prayer_count || 0) + 1;

        const updateResponse = await supabaseRest(
            `intentions?id=eq.${encodeURIComponent(id)}`,
            {
                method: 'PATCH',
                body: JSON.stringify({ prayer_count: updatedCount }),
            },
            { prefer: 'return=representation' }
        );

        if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error('Supabase error (PATCH prayer count)', errorText);
            return NextResponse.json(
                { message: 'No se pudo actualizar la intención.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ prayerCount: updatedCount });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocurrió un error inesperado.' },
            { status: 500 }
        );
    }
}
