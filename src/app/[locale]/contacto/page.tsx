'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ContactForm from '../../../components/ContactForm';
import '../globals.css';

type ContactChannel = {
    label: string;
    value: string;
    href: string;
};

export default function ContactoPage() {
    const t = useTranslations('ContactPage');
    const channels = t.raw('channels') as ContactChannel[];

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

            <section className="grid gap-6 md:grid-cols-2">
                <div className="card-soft border border-white/60 bg-white/80">
                    <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                        {t('channelsTitle')}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('channelsSubtitle')}
                    </p>
                    <ul className="mt-6 space-y-4">
                        {channels.map((channel) => (
                            <li
                                key={channel.label}
                                className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm"
                            >
                                <p className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                    {channel.label}
                                </p>
                                <Link
                                    href={channel.href}
                                    className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                                >
                                    {channel.value}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-primary)]/40 bg-[var(--surface-alt)] p-4 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('availability')}
                    </div>
                </div>
                <div className="card-soft border border-white/60 bg-white/80">
                    <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                        {t('formTitle')}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('formSubtitle')}
                    </p>
                    <div className="mt-4">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
