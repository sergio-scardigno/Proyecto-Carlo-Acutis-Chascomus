'use client';

import { useTranslations, useLocale } from 'next-intl';
import Script from 'next/script';
import Image from 'next/image';
import './globals.css';
import Timeline from '../../components/timeline-carlo-acutis';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import { useRouter } from 'next/navigation';

export default function Home() {
    const t = useTranslations('IndexPage');
    const [isClient, setIsClient] = useState(false);
    const locale = useLocale();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Script id="matomo-tracking">
                {`
                    var _paq = window._paq = window._paq || [];
                    _paq.push(['trackPageView']);
                    _paq.push(['enableLinkTracking']);
                    (function() {
                        var u = "//rampazzo-matomo.ndorzn.easypanel.host/";
                        _paq.push(['setTrackerUrl', u + 'matomo.php']);
                        _paq.push(['setSiteId', '2']);
                        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                        g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
                    })();
                `}
            </Script>

            <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">

            {/* Tarjeta de Canonización */}
            <div className="w-full max-w-2xl mb-8 p-6 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/3">
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                            <Image
                                src="/img/canonizacion/canonizacion-carlo.jpg"
                                alt="Carlo Acutis canonizado"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold text-amber-800 mb-2">
                            ¡Carlo Acutis ya es santo!
                        </h2>
                        <p className="text-gray-700 mb-4">
                            La Iglesia Católica celebra el primer milenial canonizado. Un día histórico en la Plaza de San Pedro, donde el Papa León XIV presidió la ceremonia.
                        </p>
                        <Link 
                            href={`/${locale}/canonizacion`}
                            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                        >
                            Leer más
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="w-full border-t border-gray-300 my-4" />


            <div className="mb-4 flex justify-center">
                <Image
                    src="/img/logo/logo.png"
                    width={300}
                    height={150}
                    alt="Logo Carlo Acutis"
                    className="rounded-full shadow-lg"
                    style={{
                        objectFit: 'contain',
                        backgroundColor: 'transparent'
                    }}
                />
            </div>
            <p className="text-center mb-4">{t('description')}</p>
            <hr className="w-full border-t border-gray-300 my-4" />

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
                    Con profundo dolor y esperanza cristiana, despedimos al Papa
                    Francisco, pastor humilde y cercano, que marcó una huella
                    imborrable en la Iglesia y en nuestros corazones. Su
                    testimonio de fe, amor y servicio permanecerá siempre entre
                    nosotros.
                </p>
            </div>

            <div className="w-full max-w-4xl mb-8 p-6 border border-blue-400 rounded-lg shadow-lg bg-blue-50 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
                    {t('entronizacion-chascomus-title')}
                </h2>
                <div className="flex flex-col items-center mb-4">
                    <Image
                        src="/img/chascomus/carlo-acutis-chascomus.jpg"
                        width={300}
                        height={400}
                        alt="Entronización de Carlo Acutis en Chascomús"
                        className="rounded-lg shadow mb-4"
                    />
                    <div className="flex flex-col space-y-3 text-center max-w-2xl">
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-date')}
                        </p>
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-image')}
                        </p>
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-celebracion')}
                        </p>
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-actividades')}
                        </p>
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-clima')}
                        </p>
                        <p className="text-gray-700">
                            {t('entronizacion-chascomus-agradecimiento')}
                        </p>
                        <p className="text-gray-700 font-semibold">
                            {t('entronizacion-chascomus-final')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    Entronizaciones de Carlo Acutis
                </h2>
                <p className="text-center text-gray-700 mb-4">
                    Descubre los lugares donde Carlo Acutis ha sido entronizado
                    y cómo su testimonio sigue inspirando a jóvenes y fieles en
                    todo el mundo.
                </p>
                <Link href={`/${locale}/entronizaciones`}>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Ver entronizaciones
                    </button>
                </Link>
            </div>

            <div className="w-full max-w-2xl mb-8 p-6 border border-yellow-400 rounded-lg shadow-lg bg-yellow-50 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-yellow-800">
                    Un momento de silencio y espera
                </h2>
                <p className="text-center text-yellow-700 mb-4">
                    Reflexión especial sobre la partida del Papa Francisco y el
                    futuro de la canonización de Carlo Acutis.
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
                alt="Retrato del Beato Carlo Acutis en Chascomús, Argentina"
                className="rounded-lg shadow-lg"
            />

            <hr className="w-full border-t border-gray-300 my-4 mb-6 mt-6" />

            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 tracking-wider drop-shadow-lg mt-6">
                {t('carlo-acutis-IA')}
            </h2>

            <iframe
                className="w-full aspect-w-16 aspect-h-12 h-64 md:h-500px"
                src="https://www.youtube.com/embed/3IQF38Icrgw?si=NEbdf8kycFXr7rKe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>



            <h2 className="text-base font-bold mb-4 text-center text-gray-800 tracking-wider drop-shadow-lg mt-6">
                {t('invitation')}
            </h2>

            <ContactForm />
        </div>
        </>
    );
}
