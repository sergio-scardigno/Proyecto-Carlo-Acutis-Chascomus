import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './oracion.css';

export default function Oracion() {
    const t = useTranslations('Oracion'); // 'Oracion' debe coincidir con el namespace en es.json

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-4 font-semibold text-center font-zapfino">
                {t('title')} {/* Verifica que 'title' exista en es.json */}
            </h1>
        </div>
    );
}
