'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '../globals.css';

type EventInfo = {
    date: string;
    title: string;
    location: string;
    description: string;
    emphasis?: string;
};

export default function EventosPage() {
    const t = useTranslations('EventsPage');
    const upcoming = t.raw('upcoming') as EventInfo[];
    const past = t.raw('past') as EventInfo[];

    return (
        <div className="flex flex-col gap-12 hero">
            <section className="section-shell">
                <span className="eyebrow text-[var(--color-primary)]">
                    {t('hero.eyebrow')}
                </span>
                <h1 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                    {t('hero.title')}
                </h1>
                <p className="mt-3 text-sm text-[var(--color-subtle)] leading-relaxed">
                    {t('hero.subtitle')}
                </p>
            </section>

            <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                <div className="card-soft border border-white/60 bg-white/80">
                    <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                        {t('upcomingTitle')}
                    </h2>
                    <div className="mt-6 space-y-5">
                        {upcoming.map((event) => (
                            <article
                                key={event.title}
                                className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm"
                            >
                                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)]">
                                    {event.date}
                                </p>
                                <h3 className="mt-1 text-base font-semibold text-[var(--color-ink)]">
                                    {event.title}
                                </h3>
                                <p className="text-xs font-semibold text-[var(--color-subtle)] uppercase tracking-widest">
                                    {event.location}
                                </p>
                                <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                                    {event.description}
                                </p>
                                {event.emphasis && (
                                    <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-primary)]">
                                        {event.emphasis}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
                <aside className="card-soft border border-white/60 bg-white/80">
                    <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                        {t('sidebar.title')}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('sidebar.description')}
                    </p>
                    <Link
                        href="https://wa.me/+5491140281302"
                        className="btn-primary-soft mt-6 inline-flex justify-center"
                    >
                        {t('sidebar.primaryCta')}
                    </Link>
                    <Link
                        href="/#contacto"
                        className="btn-secondary-light mt-3 inline-flex justify-center"
                    >
                        {t('sidebar.secondaryCta')}
                    </Link>
                </aside>
            </section>

            <section className="card-soft border border-white/60 bg-white/80">
                <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                    {t('pastTitle')}
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {past.map((event) => (
                        <article
                            key={event.title}
                            className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm"
                        >
                            <p className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                {event.date}
                            </p>
                            <h3 className="mt-1 text-base font-semibold text-[var(--color-ink)]">
                                {event.title}
                            </h3>
                            <p className="text-xs font-semibold text-[var(--color-subtle)] uppercase tracking-widest">
                                {event.location}
                            </p>
                            <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                                {event.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
