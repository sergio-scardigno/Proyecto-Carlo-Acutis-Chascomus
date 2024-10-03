import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const userLang = navigator.language; // Obtiene el idioma del navegador
        if (userLang.startsWith('en')) {
            router.push('/en'); // Redirige a la versión en inglés
        } else {
            router.push('/es'); // Redirige a la versión en español (o cualquier idioma que desees)
        }
    }, [router]);

    return <div>Cargando...</div>;
}
