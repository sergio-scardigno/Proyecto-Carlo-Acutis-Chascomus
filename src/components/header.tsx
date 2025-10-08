'use client'; // Directiva para convertir el componente en un Client Component

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Script from 'next/script';
import LocalSwitcher from './local-switcher';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import SocialMedia from '../components/SocialMedia';

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const locale = useLocale();

    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    const navItems = useMemo(
        () => [
            {
                href: `/${locale}`,
                label: t('links.home'),
                group: 'community',
            },
            {
                href: `/${locale}/oracion`,
                label: t('links.oracion'),
                group: 'liveFaith',
            },
            {
                href: `/${locale}/testimonios`,
                label: t('links.testimonios'),
                group: 'liveFaith',
            },
            {
                href: `/${locale}/intenciones`,
                label: t('links.intenciones'),
                group: 'liveFaith',
            },
            {
                href: `/${locale}/entronizaciones`,
                label: t('links.entronizaciones'),
                group: 'resources',
            },
            {
                href: `/${locale}/videos`,
                label: t('links.videos'),
                group: 'resources',
            },
            {
                href: `/${locale}/biblioteca`,
                label: t('links.library'),
                group: 'resources',
            },
            {
                href: `/${locale}/eventos`,
                label: t('links.events'),
                group: 'community',
            },
            {
                href: `/${locale}/contacto`,
                label: t('links.contact'),
                group: 'community',
            },
        ],
        [locale, t]
    );

    const navGroups = useMemo(() => {
        return [
            {
                id: 'liveFaith',
                label: t('groups.liveFaith'),
                items: navItems.filter((item) => item.group === 'liveFaith'),
            },
            {
                id: 'resources',
                label: t('groups.resources'),
                items: navItems.filter((item) => item.group === 'resources'),
            },
            {
                id: 'community',
                label: t('groups.community'),
                items: navItems.filter((item) => item.group === 'community'),
            },
        ];
    }, [navItems, t]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;

            if (delta > 12 && currentY > 120) {
                setIsHidden(true);
            } else if (delta < -12 || currentY <= 120) {
                setIsHidden(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsHidden(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const getLinkStyles = (href: string) => {
        const isActive =
            href === `/${locale}`
                ? pathname === href
                : pathname.startsWith(href);
        return [
            'transition-all duration-200',
            'text-xs uppercase tracking-[0.08em] whitespace-nowrap',
            'px-1.5 py-1',
            'hover:text-[var(--color-primary)]',
            isActive ? 'text-[var(--color-primary)] font-semibold' : 'text-[var(--color-subtle)]',
        ].join(' ');
    };

    return (
        <header
            className={[
                'p-3 sm:p-4 sticky top-0 z-30',
                'backdrop-blur bg-white/80 border border-white/50 rounded-2xl shadow-sm',
                'transition-transform duration-300 ease-out',
                isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0',
            ].join(' ')}
        >
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-6VL9W034FS"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6VL9W034FS');
                `}
            </Script>

            <div className="flex items-center justify-between switcher mb-5">
                {/* Componente para cambiar de idioma a la izquierda */}
                <div className="w-full sm:w-auto mt-2 sm:mt-0 flex gap-3 items-center">
                    <LocalSwitcher />
                </div>
                {/* Social media a la derecha */}
                <div className="ml-auto">
                    <SocialMedia />
                </div>
            </div>

            <nav className="bg-transparent px-2">
                <div className="lg:hidden flex justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--color-primary)] focus:outline-none hover:text-black"
                        aria-expanded={isOpen}
                        aria-label={t('toggleNavigation')}
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

                <div className="hidden lg:flex lg:flex-nowrap lg:items-center lg:justify-center lg:gap-4 xl:gap-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={getLinkStyles(item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div
                className={[
                    'fixed inset-y-0 right-0 z-30 w-72 max-w-[80%] lg:hidden',
                    'bg-white shadow-2xl border-l border-white/60',
                    'transition-transform duration-300 ease-out',
                    isOpen
                        ? 'translate-x-0 pointer-events-auto'
                        : 'translate-x-full pointer-events-none',
                    'flex flex-col',
                ].join(' ')}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
                aria-label={t('drawerTitle')}
            >
                <div className="flex items-center justify-between border-b border-white/60 px-4 py-3">
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('drawerTitle')}
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label={t('closeNavigation')}
                        className="rounded-full p-2 text-[var(--color-primary)] hover:bg-[var(--surface-alt)] transition"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    {navGroups.map((group) => (
                        <div key={group.id} className="flex flex-col gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-subtle)]">
                                {group.label}
                            </span>
                            <div className="flex flex-col gap-2">
                                {group.items.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={getLinkStyles(item.href)}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
