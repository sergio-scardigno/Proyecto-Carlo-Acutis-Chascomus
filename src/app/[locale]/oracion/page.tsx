import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './oracion.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Novena y Oración a Carlo Acutis',
    description:
        'Encuentra la novena completa y oraciones al Beato Carlo Acutis para pedir su intercesión. Meditaciones diarias para crecer en la fe.',
    openGraph: {
        title: 'Novena y Oración a Carlo Acutis',
        description:
            'Encuentra la novena completa y oraciones al Beato Carlo Acutis para pedir su intercesión.',
        images: [
            {
                url: '/img/oracion/primer_dia.jpg', // Imagen del primer día como destacada
                width: 400,
                height: 300,
                alt: 'Oración al Beato Carlo Acutis',
            },
        ],
    },
};

export default function Oracion() {
    const t = useTranslations('Oracion'); // 'Oracion' debe coincidir con el namespace en es.json

    // Lista de las claves de las meditaciones (puedes también generar esto dinámicamente si lo prefieres)
    const dias = [
        'primer_dia',
        'segundo_dia',
        'tercer_dia',
        'cuarto_dia',
        'quinto_dia',
        'sexto_dia',
        'septimo_dia',
        'octavo_dia',
        'noveno_dia',
    ];

    // Ruta de imágenes en el directorio public
    const imagenes = [
        '/img/oracion/primer_dia.jpg',
        '/img/oracion/segundo_dia.jpg',
        '/img/oracion/tercer_dia.jpg',
        '/img/oracion/cuarto_dia.jpg',
        '/img/oracion/quinto_dia.jpg',
        '/img/oracion/sexto_dia.jpg',
        '/img/oracion/septimo_dia.jpg',
        '/img/oracion/octavo_dia.jpg',
        '/img/oracion/noveno_dia.jpg',
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 hero">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-6xl">
                {t('title')}
            </h1>

            {/* Iteramos sobre las meditaciones para mostrarlas */}
            {dias.map((dia, index) => (
                <div
                    key={index}
                    className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row items-center" // Cambiamos el layout en pantallas pequeñas
                >
                    {/* Imagen al lado del texto en pantallas grandes, arriba en pantallas pequeñas */}
                    <Image
                        src={imagenes[index]}
                        alt={`Meditación: ${t(
                            `meditaciones.${dia}.titulo`
                        )} - Novena al Beato Carlo Acutis`}
                        width={400}
                        height={300}
                        className="w-full md:w-1/3 h-auto mb-4 md:mb-0 md:mr-4 rounded-lg" // Ajustamos el tamaño y el margen según el tamaño de pantalla
                    />

                    <div className="flex-grow">
                        <h2 className="text-lg font-bold mb-4">
                            {t(`meditaciones.${dia}.titulo`)}
                        </h2>
                        <p className="italic mb-4">
                            {t(`meditaciones.${dia}.cita`)}
                        </p>
                        <p className="mb-4">
                            {t(`meditaciones.${dia}.oracion`)}
                        </p>
                        <p className="text-gray-600">
                            {t(`meditaciones.${dia}.agradecimiento`)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
