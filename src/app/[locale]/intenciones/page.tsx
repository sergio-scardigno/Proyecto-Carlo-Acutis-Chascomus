'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import PrayerWall from '../../../components/prayer-wall';
import '../globals.css';

export default function IntencionesPage() {
    const t = useTranslations('PrayerWallPage');

    return (
        <div className="flex flex-col gap-12 hero">
            <section className="section-shell">
                <span className="eyebrow text-[var(--color-primary)]">
                    {t('eyebrow')}
                </span>
                <h1 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                    {t('title')}
                </h1>
                <p className="mt-4 text-sm text-[var(--color-subtle)] leading-relaxed">
                    {t('intro')}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {t
                        .raw('pillars')
                        .map(
                            (pillar: { title: string; description: string }) => (
                                <div
                                    key={pillar.title}
                                    className="card-soft border border-white/60 bg-white/80"
                                >
                                    <h3 className="text-base font-semibold text-[var(--color-ink)]">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            )
                        )}
                </div>
                <p className="mt-6 text-sm text-[var(--color-subtle)] leading-relaxed">
                    {t('notice')}{' '}
                    <Link
                        href="mailto:carloacutischascomus@gmail.com"
                        className="text-[var(--color-primary)] font-semibold"
                    >
                        {t('contact')}
                    </Link>
                </p>
            </section>

            <PrayerWall />
        </div>
    );
}
