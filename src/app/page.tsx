'use client'; // Asegúrate de que este componente es un Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            const userLang = navigator.language; // Solo usa 'language'

            // Redirige basado en el idioma
            if (userLang.startsWith('en')) {
                router.push('/en'); // Redirigir a la versión en inglés
            } else {
                router.push('/es'); // Redirigir a la versión en español
            }
        }
    }, [router]);

    return <div>Cargando...</div>; // Mensaje de carga
}
