'use client'; // Directiva para convertir el componente en un Client Component

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual
import { useLocale } from 'next-intl'; // Hook para obtener el idioma actual
import SocialMedia from '../components/SocialMedia';
import { useState } from 'react';

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname(); // Obtiene la ruta actual
    const locale = useLocale(); // Obtiene el idioma actual

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-4">
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-6VL9W034FS"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6VL9W034FS');
          `,
                }}
            ></script>

            <div className="flex items-center justify-between switcher mb-5">
                {/* Componente para cambiar de idioma a la izquierda */}
                <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <LocalSwitcher />
                </div>
                {/* Social media a la derecha */}
                <div className="ml-auto">
                    <SocialMedia />
                </div>
            </div>

            <nav className="bg-transparent p-4">
                <div className="flex items-center justify-between lg:justify-center">
                    {/* Logo o nombre de la aplicación */}

                    {/* Botón de menú para pantallas pequeñas, alineado a la derecha */}
                    <div className="lg:hidden flex-1 flex justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-red-500 focus:outline-none hover:text-black"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Links del menú: centrados en desktop, colapsables en móvil */}
                <div
                    className={`lg:flex flex-col lg:flex-row lg:space-x-4 lg:justify-center lg:items-center ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <Link
                        href={`/${locale}`}
                        className="block text-red-500 py-2 lg:py-0 hover:text-black"
                    >
                        {t('home')}
                    </Link>

                    <Link
                        href={`/${locale}/oracion`}
                        className="block text-red-500 py-2 lg:py-0 hover:text-black"
                    >
                        {t('url')}
                    </Link>
                    <Link
                        href={`/${locale}/videos`}
                        className="block text-red-500 py-2 lg:py-0 hover:text-black"
                    >
                        {t('videos')}
                    </Link>
                    <Link
                        href={`/${locale}/testimonios`}
                        className="block text-red-500 py-2 lg:py-0 hover:text-black"
                    >
                        {t('testimonios')}
                    </Link>
                    <Link
                        href={`/${locale}/entronizaciones`}
                        className="block text-red-500 py-2 lg:py-0 hover:text-black"
                    >
                        {t('entronizaciones')}
                    </Link>
                </div>
            </nav>
        </header>
    );
}
