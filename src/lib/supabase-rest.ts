'use server';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

function assertSupabaseEnv() {
    if (!SUPABASE_URL) {
        throw new Error(
            'SUPABASE_URL is not configured. Please add it to your environment.'
        );
    }
    if (!SUPABASE_SERVICE_ROLE_KEY) {
        throw new Error(
            'SUPABASE_SERVICE_ROLE_KEY is not configured. Please add it to your environment.'
        );
    }
}

export async function supabaseRest(
    pathWithQuery: string,
    init: RequestInit = {},
    options?: { prefer?: string }
) {
    assertSupabaseEnv();

    const headers = new Headers(init.headers);
    headers.set('apikey', SUPABASE_SERVICE_ROLE_KEY!);
    headers.set('Authorization', `Bearer ${SUPABASE_SERVICE_ROLE_KEY!}`);
    if (SUPABASE_ANON_KEY && !headers.has('x-client-info')) {
        headers.set('x-client-info', SUPABASE_ANON_KEY);
    }
    if (init.body && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }
    if (options?.prefer) {
        headers.set('Prefer', options.prefer);
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/${pathWithQuery}`, {
        ...init,
        headers,
        cache: 'no-store',
    });

    return response;
}

export type SupabaseRecord<T> = T & {
    id: string;
    created_at: string;
};
