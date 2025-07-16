import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Entronizaciones de Carlo Acutis',
    description:
        'Galería y detalles de las entronizaciones de las reliquias e imágenes del Beato Carlo Acutis en diversas comunidades y parroquias de Argentina.',
    openGraph: {
        title: 'Entronizaciones de Carlo Acutis',
        description:
            'Galería y detalles de las entronizaciones de las reliquias e imágenes del Beato Carlo Acutis en diversas comunidades y parroquias de Argentina.',
        images: [
            {
                url: '/img/entronizaciones/Basílica%20de%20Luján.jpg',
                width: 800,
                height: 600,
                alt: 'Entronización en la Basílica de Luján',
            },
        ],
    },
};

export default function EntronizacionesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
