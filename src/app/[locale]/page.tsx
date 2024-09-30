'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './globals.css';
import Timeline from '../../components/timeline-carlo-acutis';
import { useEffect, useState } from 'react';
import Head from 'next/head'; // Importar Head

export default function Home() {
    const t = useTranslations('IndexPage');

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <Head>
                <title>Carlo Acutis en Chascomús - Proyecto Carlo Acutis</title>
                <meta
                    name="description"
                    content="Conoce la vida y devoción de Carlo Acutis en Chascomús. Información sobre su testimonio de fe, eventos religiosos, y recursos espirituales en la ciudad."
                />
                <meta
                    name="keywords"
                    content="Carlo Acutis, Beato, Iglesia, Carlo Acutis Chascomús, Vida de Santos, Devoción, Testimonio de Fe"
                />
                <meta name="author" content="Tu Nombre" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:title"
                    content="Carlo Acutis en Chascomús - Proyecto Carlo Acutis"
                />
                <meta
                    property="og:description"
                    content="Descubre la devoción a Carlo Acutis en Chascomús y cómo su vida inspira a creyentes de todas las edades."
                />
                <meta property="og:image" content="/img/carlo-acutis.webp" />
                <meta
                    property="og:url"
                    content="https://www.carloacutis.net.ar"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://www.carloacutis.net.ar" />
            </Head>

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
        </>
    );
}
