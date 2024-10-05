'use client'; // Directiva para convertir el componente en un Client Component

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual
import { useLocale } from 'next-intl'; // Hook para obtener el idioma actual
import SocialMedia from '../components/SocialMedia';

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname(); // Obtiene la ruta actual
    const locale = useLocale(); // Obtiene el idioma actual

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

            <nav className="flex flex-wrap items-center justify-between switcher">
                {/* Link a la página principal con el locale actual */}
                <Link href={`/${locale}`} className="nav-link">
                    {t('home')}
                </Link>
                {/* Link a la página de oración con el locale actual */}
                <Link href={`/${locale}/oracion`} className="nav-link">
                    {t('url')}
                </Link>
                {/* Link a la página de videos con el locale actual */}
                <Link href={`/${locale}/videos`} className="nav-link">
                    {t('videos')}
                </Link>
                {/* Link a la página de testimonios con el locale actual */}
                <Link href={`/${locale}/testimonios`} className="nav-link">
                    {t('testimonios')}
                </Link>
            </nav>
        </header>
    );
}
