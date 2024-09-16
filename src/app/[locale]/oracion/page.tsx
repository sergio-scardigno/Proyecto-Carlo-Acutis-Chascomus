import { useTranslations } from 'next-intl';
import './oracion.css';

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
                    className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg flex items-center" // Añadido "flex" para alinear texto e imagen
                >
                    {/* Imagen al lado del texto */}
                    <img
                        src={imagenes[index]}
                        alt={t(`meditaciones.${dia}.titulo`)}
                        className="w-1/3 h-auto mr-4 rounded-lg" // Ajusta el tamaño de la imagen
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
