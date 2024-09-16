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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 hero">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-2xl">
                {t('title')}
            </h1>

            {/* Iteramos sobre las meditaciones para mostrarlas */}
            {dias.map((dia, index) => (
                <div
                    key={index}
                    className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg"
                >
                    <h2 className="text-lg font-bold mb-4">
                        {t(`meditaciones.${dia}.titulo`)}
                    </h2>
                    <p className="italic mb-4">
                        {t(`meditaciones.${dia}.cita`)}
                    </p>
                    <p className="mb-4">{t(`meditaciones.${dia}.oracion`)}</p>
                    <p className="text-gray-600">
                        {t(`meditaciones.${dia}.agradecimiento`)}
                    </p>
                </div>
            ))}
        </div>
    );
}
