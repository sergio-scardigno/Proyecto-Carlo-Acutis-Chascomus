'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useLocale, useTranslations } from 'next-intl';
import './globals.css';
import ContactForm from '../../components/ContactForm';

const Timeline = dynamic(
    () => import('../../components/timeline-carlo-acutis'),
    { ssr: false }
);

export default function Home() {
    const t = useTranslations('IndexPage');
    const locale = useLocale();

    const highlightCards = [
        {
            eyebrow: t('highlights.prayer.eyebrow'),
            title: t('highlights.prayer.title'),
            description: t('highlights.prayer.description'),
            href: `/${locale}/oracion`,
            cta: t('highlights.prayer.cta'),
            icon: '🕯️',
        },
        {
            eyebrow: t('highlights.entrance.eyebrow'),
            title: t('highlights.entrance.title'),
            description: t('highlights.entrance.description'),
            href: `/${locale}/entronizaciones`,
            cta: t('highlights.entrance.cta'),
            icon: '⛪',
        },
        {
            eyebrow: t('highlights.resources.eyebrow'),
            title: t('highlights.resources.title'),
            description: t('highlights.resources.description'),
            href: `/${locale}/biblioteca`,
            cta: t('highlights.resources.cta'),
            icon: '📚',
        },
    ];

    const newsHighlights = [
        {
            title: t('news.pope.title'),
            description: t('news.pope.description'),
            href: `/${locale}/silencio-espera`,
            eyebrow: t('news.pope.eyebrow'),
        },
        {
            title: t('news.events.title'),
            description: t('news.events.description'),
            href: `/${locale}/eventos`,
            eyebrow: t('news.events.eyebrow'),
        },
    ];

    const upcomingMoments = [
        {
            date: t('agenda.item1.date'),
            title: t('agenda.item1.title'),
            place: t('agenda.item1.place'),
        },
        {
            date: t('agenda.item2.date'),
            title: t('agenda.item2.title'),
            place: t('agenda.item2.place'),
        },
        {
            date: t('agenda.item3.date'),
            title: t('agenda.item3.title'),
            place: t('agenda.item3.place'),
        },
    ];

    const encodeSrc = (path: string) => encodeURI(path);

    const entronizacionesPreview = [
        {
            title: 'Basílica de Luján',
            description: t('entrancesPreview.lujan'),
            image: '/img/entronizaciones/Basílica de Luján.jpg',
        },
        {
            title: 'Chascomús - Catedral',
            description: t('entrancesPreview.chascomus'),
            image: '/img/entronizaciones/Catedral Nuestra Señora de la Merced CHASCOMUS.jpg',
        },
        {
            title: 'Las Armas',
            description: t('entrancesPreview.lasArmas'),
            image: '/img/entronizaciones/Las Armas.jpg',
        },
    ];

    return (
        <div className="flex flex-col gap-16 py-6 hero">
            <section className="relative overflow-hidden rounded-3xl bg-black/60 text-white">
                <Image
                    src="/img/carlo-acutis.webp"
                    alt={t('hero.imageAlt')}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-60"
                />
                <div className="relative z-10 px-6 py-16 md:px-12 lg:px-16">
                    <span className="eyebrow text-white/70">
                        {t('hero.eyebrow')}
                    </span>
                    <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight heading-script">
                        {t('hero.title')}
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm md:text-base text-white/80">
                        {t('hero.subtitle')}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href={`/${locale}/intenciones`} className="btn-primary-soft">
                            {t('hero.primaryCta')}
                        </Link>
                        <Link href="#trayectoria" className="btn-secondary-light">
                            {t('hero.secondaryCta')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
                {highlightCards.map((card) => (
                    <div key={card.title} className="card-soft h-full flex flex-col gap-4">
                        <span className="text-3xl">{card.icon}</span>
                        <span className="eyebrow">{card.eyebrow}</span>
                        <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                            {card.title}
                        </h3>
                        <p className="text-sm text-[var(--color-subtle)]">
                            {card.description}
                        </p>
                        <Link
                            href={card.href}
                            className="mt-auto inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                        >
                            {card.cta}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                ))}
            </section>

            <section className="grid gap-10 lg:grid-cols-[2fr,1fr]">
                <div className="section-shell">
                    <span className="eyebrow">{t('news.eyebrow')}</span>
                    <h2 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                        {t('news.title')}
                    </h2>
                    <div className="mt-6 grid gap-6">
                        {newsHighlights.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm transition hover:shadow-lg"
                            >
                                <span className="eyebrow text-[var(--color-primary)]">
                                    {item.eyebrow}
                                </span>
                                <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                                    {item.description}
                                </p>
                                <Link
                                    href={item.href}
                                    className="mt-4 inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                                >
                                    {t('news.cta')}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
                <aside className="card-soft">
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('agenda.eyebrow')}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                        {t('agenda.title')}
                    </h3>
                    <ul className="mt-6 space-y-4">
                        {upcomingMoments.map((event) => (
                            <li key={event.title} className="rounded-xl border border-white/40 bg-white/70 p-4">
                                <p className="text-sm font-semibold text-[var(--color-primary)]">
                                    {event.date}
                                </p>
                                <p className="text-base font-medium text-[var(--color-ink)]">
                                    {event.title}
                                </p>
                                <p className="text-sm text-[var(--color-subtle)]">
                                    {event.place}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={`/${locale}/eventos`}
                        className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                    >
                        {t('agenda.cta')}
                        <span aria-hidden="true">→</span>
                    </Link>
                </aside>
            </section>

            <section className="section-shell">
                <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="flex-1">
                        <span className="eyebrow text-[var(--color-primary)]">
                            {t('entrancesPreview.eyebrow')}
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                            {t('entrancesPreview.title')}
                        </h2>
                        <p className="mt-3 text-sm text-[var(--color-subtle)] leading-relaxed">
                            {t('entrancesPreview.description')}
                        </p>
                        <Link
                            href={`/${locale}/entronizaciones`}
                            className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                        >
                            {t('entrancesPreview.cta')}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="flex-1 grid gap-4 sm:grid-cols-2">
                        {entronizacionesPreview.map((item) => (
                            <figure
                                key={item.title}
                                className="overflow-hidden rounded-2xl border border-white/50 bg-white/70 shadow-sm"
                            >
                                <Image
                                    src={encodeSrc(item.image)}
                                    alt={item.title}
                                    width={420}
                                    height={280}
                                    className="h-40 w-full object-cover"
                                />
                                <figcaption className="p-4">
                                    <p className="text-sm font-semibold text-[var(--color-ink)]">
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-xs text-[var(--color-subtle)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="trayectoria"
                className="section-shell flex flex-col gap-6"
            >
                <div>
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('journey.eyebrow')}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                        {t('journey.title')}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('journey.description')}
                    </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 p-4">
                    <Timeline />
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[3fr,2fr] items-center">
                <div className="section-shell">
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('video.eyebrow')}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                        {t('video.title')}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('video.description')}
                    </p>
                    <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/60 bg-black/60 shadow-lg">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/3IQF38Icrgw?si=NEbdf8kycFXr7rKe"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
                <div className="card-soft">
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('invitation.eyebrow')}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                        {t('invitation.title')}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('invitation.copy')}
                    </p>
                    <Link
                        href="https://wa.me/+5491140281302"
                        className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
                    >
                        {t('whatsapp-group')}
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>

            <section
                id="contacto"
                className="section-shell border border-white/60 bg-white/80"
            >
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <span className="eyebrow text-[var(--color-primary)]">
                        {t('contact.eyebrow')}
                    </span>
                    <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                        {t('contact.title')}
                    </h2>
                    <p className="text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('contact.description')}
                    </p>
                </div>
                <div className="mt-8">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
