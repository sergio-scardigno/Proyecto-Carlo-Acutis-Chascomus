'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './globals.css';
import Timeline from '../../components/timeline-carlo-acutis';
import { useEffect, useState } from 'react';

export default function Home() {
    const t = useTranslations('IndexPage');

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-4 font-semibold text-center font-zapfino">
                {t('title')}
            </h1>
            <p className="text-center mb-4">{t('description')}</p>
            <hr className="w-full border-t border-gray-300 my-4" />
            <Image
                src="/img/carlo-acutis.webp"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
            />

            <hr className="w-full border-t border-gray-300 my-4" />

            <Image
                src="/img/entronacion.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
            />

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <p className="text-center mt-4 mb-4">{t('ceremony')}</p>
            </div>
            <Timeline />

            <hr className="w-full border-t border-gray-300 my-4" />
            <Image
                src="/img/folleto.webp"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
            />

            <hr className="w-full border-t border-gray-300 my-4" />
        </div>
    );
}
