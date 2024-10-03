'use client'; // Asegúrate de que este componente es un Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage; // Usa 'language' en lugar de 'userLanguage'
        if (userLang.startsWith('en')) {
            router.push('/en'); // Redirigir a la versión en inglés
        } else {
            router.push('/es'); // Redirigir a la versión en español
        }
    }, [router]);

    return <div>Cargando...</div>; // Mensaje de carga
}
