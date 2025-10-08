'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '../globals.css';

type ResourceCategory = {
    title: string;
    description: string;
    resources: { label: string; type: string }[];
};

export default function BibliotecaPage() {
    const t = useTranslations('LibraryPage');
    const categories = t.raw('categories') as ResourceCategory[];

    return (
        <div className="flex flex-col gap-12 hero">
            <section className="section-shell">
                <span className="eyebrow text-[var(--color-primary)]">
                    {t('hero.eyebrow')}
                </span>
                <h1 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                    {t('hero.title')}
                </h1>
                <p className="mt-4 text-sm text-[var(--color-subtle)] leading-relaxed">
                    {t('hero.subtitle')}
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {categories.map((category) => (
                    <article
                        key={category.title}
                        className="card-soft flex flex-col gap-4 border border-white/60 bg-white/80"
                    >
                        <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                            {category.title}
                        </h2>
                        <p className="text-sm text-[var(--color-subtle)] leading-relaxed">
                            {category.description}
                        </p>
                        <ul className="space-y-3">
                            {category.resources.map((resource) => (
                                <li
                                    key={resource.label}
                                    className="flex items-start justify-between gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--color-ink)] leading-tight">
                                            {resource.label}
                                        </p>
                                        <p className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                            {resource.type}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-secondary-light text-xs"
                                    >
                                        {t('actions.request')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="card-soft border border-white/60 bg-white/80 text-center">
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {t('cta.title')}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-subtle)]">
                    {t('cta.subtitle')}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Link
                        href="mailto:carloacutischascomus@gmail.com?subject=Recursos%20para%20mi%20comunidad"
                        className="btn-primary-soft"
                    >
                        {t('cta.primary')}
                    </Link>
                    <Link href="/#contacto" className="btn-secondary-light">
                        {t('cta.secondary')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
