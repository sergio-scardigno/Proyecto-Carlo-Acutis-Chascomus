'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import './globals.css';
import Timeline from '../../components/timeline-carlo-acutis';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export default function Home() {
    const t = useTranslations('IndexPage');
    const [isClient, setIsClient] = useState(false);
    const locale = useLocale();

    useEffect(() => {
        setIsClient(true); // Asegurarte de que el componente se ha montado en el cliente
    }, []);

    if (!isClient) {
        return <div>Cargando...</div>; // O cualquier mensaje de carga
    }

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
                <meta name="author" content="Sergio" />
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
                    content="https://www.carloacutis.net.ar/es/"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="canonical"
                    href="https://www.carloacutis.net.ar/es"
                />
            </Head>

            <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
                <h1 className="mb-4 font-semibold text-center font-zapfino">
                    {t('title')}
                </h1>
                <p className="text-center mb-4">{t('description')}</p>
                <hr className="w-full border-t border-gray-300 my-4" />

                {/* Homenaje al Papa Francisco */}
                <div className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                        Homenaje al Papa Francisco
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <Image
                            src="/img/papa-francisco.jpg"
                            width={200}
                            height={250}
                            alt="Papa Francisco 1"
                            className="rounded-lg shadow"
                        />
                    </div>
                    <p className="text-center text-gray-700 mb-2">
                        Con profundo dolor y esperanza cristiana, despedimos al
                        Papa Francisco, pastor humilde y cercano, que marcó una
                        huella imborrable en la Iglesia y en nuestros corazones.
                        Su testimonio de fe, amor y servicio permanecerá siempre
                        entre nosotros.
                    </p>
                </div>

                {/* Resumen Entronizaciones */}
                <div className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                        Entronizaciones de Carlo Acutis
                    </h2>
                    <p className="text-center text-gray-700 mb-4">
                        Descubre los lugares donde Carlo Acutis ha sido
                        entronizado y cómo su testimonio sigue inspirando a
                        jóvenes y fieles en todo el mundo.
                    </p>
                    <Link href={`/${locale}/entronizaciones`}>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                            Ver entronizaciones
                        </button>
                    </Link>
                </div>

                {/* Bloque especial: Un momento de silencio y espera */}
                <div className="w-full max-w-2xl mb-8 p-6 border border-yellow-400 rounded-lg shadow-lg bg-yellow-50 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-center text-yellow-800">
                        Un momento de silencio y espera
                    </h2>
                    <p className="text-center text-yellow-700 mb-4">
                        Reflexión especial sobre la partida del Papa Francisco y
                        el futuro de la canonización de Carlo Acutis.
                    </p>
                    <Link href={`/${locale}/silencio-espera`}>
                        <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition">
                            Leer mensaje completo
                        </button>
                    </Link>
                </div>

                <Image
                    src="/img/carlo-acutis.webp"
                    width={500}
                    height={500}
                    alt="Picture of Carlo Acutis"
                    className="rounded-lg shadow-lg"
                />

                <hr className="w-full border-t border-gray-300 my-4 mb-6 mt-6" />

                <p className="text-3xl font-bold mb-4 text-center text-gray-800 tracking-wider drop-shadow-lg mt-6">
                    {t('carlo-acutis-IA')}
                </p>

                <iframe
                    className="w-full aspect-w-16 aspect-h-12 h-64 md:h-500px"
                    src="https://www.youtube.com/embed/3IQF38Icrgw?si=NEbdf8kycFXr7rKe"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>

                <hr className="w-full border-t border-gray-300 my-4" />

                <p className="text-base font-bold mb-4 text-center text-gray-800 tracking-wider drop-shadow-lg mt-6">
                    {t('invitation')}
                </p>

                <ContactForm />
            </div>
        </>
    );
}
