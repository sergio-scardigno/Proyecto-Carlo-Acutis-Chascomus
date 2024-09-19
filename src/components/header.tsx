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
            <div className="flex items-end justify-end switcher mb-5">
            <SocialMedia />
            </div>
            <nav className="flex items-start switcher">
                {/* Link a la página principal con el locale actual */}
                <Link href={`/${locale}`} className="nav-link">
                    {t('home')}
                </Link>
                {/* Link a la página de oración con el locale actual */}
                <Link href={`/${locale}/oracion`} className="nav-link">
                    {t('url')}
                </Link>
                {/* Componente para cambiar de idioma */}
                <Link href={`/${locale}/videos`} className="nav-link">
                    {t('videos')}
                </Link>
                <div className="ml-auto">
                    <LocalSwitcher />
                </div>
            </nav>
        </header>
    );
}
