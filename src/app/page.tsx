import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        // Verifica que se esté ejecutando en el lado del cliente
        if (typeof window !== 'undefined') {
            // Obtener el idioma del navegador
            const userLang = navigator.language; // Usa 'language' en lugar de 'userLanguage'
            if (userLang.startsWith('en')) {
                router.push('/en'); // Redirigir a la versión en inglés
            } else {
                router.push('/es'); // Redirigir a la versión en español
            }
        }
    }, [router]);

    return <div>Cargando...</div>; // Mensaje de carga
}
