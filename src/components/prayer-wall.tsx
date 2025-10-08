'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

type IntentionCategory = 'gratitude' | 'petition' | 'youth' | 'family';

type Intention = {
    id: string;
    name: string;
    message: string;
    category: IntentionCategory;
    createdAt: string;
    prayerCount: number;
    anonymous: boolean;
};

const CATEGORY_VALUES: IntentionCategory[] = [
    'gratitude',
    'petition',
    'youth',
    'family',
];

const categories: { value: IntentionCategory; color: string }[] = [
    { value: 'gratitude', color: 'bg-amber-200 text-amber-900' },
    { value: 'petition', color: 'bg-red-200 text-red-900' },
    { value: 'youth', color: 'bg-blue-200 text-blue-900' },
    { value: 'family', color: 'bg-emerald-200 text-emerald-900' },
];

export default function PrayerWall() {
    const t = useTranslations('PrayerWall');
    const locale = useLocale();

    const [intentions, setIntentions] = useState<Intention[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<
        IntentionCategory | 'all'
    >('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        category: 'petition' as IntentionCategory,
        anonymous: false,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [prayerLoading, setPrayerLoading] = useState<Record<string, boolean>>(
        {}
    );

    const fetchIntentions = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/intentions', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch intentions');
            }

            const data = await response.json();
            const normalized: Intention[] = (data.intentions || []).map(
                (item: any) => ({
                    id: item.id,
                    name: item.name ?? '',
                    message: item.message ?? '',
                    category: CATEGORY_VALUES.includes(
                        item.category as IntentionCategory
                    )
                        ? (item.category as IntentionCategory)
                        : 'petition',
                    createdAt: item.created_at,
                    prayerCount: item.prayer_count ?? 0,
                    anonymous: Boolean(item.anonymous),
                })
            );

            setIntentions(normalized);
        } catch (err) {
            console.error(err);
            setError(t('wall.fetchError'));
        } finally {
            setLoading(false);
        }
    }, [t]);

    useEffect(() => {
        fetchIntentions();
    }, [fetchIntentions]);

    const filteredIntentions = useMemo(() => {
        return intentions
            .filter((intention) => {
                if (selectedCategory !== 'all') {
                    return intention.category === selectedCategory;
                }
                return true;
            })
            .filter((intention) => {
                if (!searchTerm.trim()) return true;
                const normalized = searchTerm.toLowerCase();
                return (
                    intention.message.toLowerCase().includes(normalized) ||
                    intention.name.toLowerCase().includes(normalized)
                );
            })
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            );
    }, [intentions, searchTerm, selectedCategory]);

    const totalPrayers = intentions.reduce(
        (total, intention) => total + intention.prayerCount,
        0
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormError(null);
        setStatusMessage(null);

        if (!formData.message.trim()) {
            setFormError(t('form.validationMessage'));
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/intentions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.message);
            }

            setStatusMessage(t('form.successPending'));
            setFormData({
                name: '',
                message: '',
                category: 'petition',
                anonymous: false,
            });

            await fetchIntentions();
        } catch (err: any) {
            const message =
                err?.message && typeof err.message === 'string'
                    ? err.message
                    : t('form.error');
            setFormError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePrayer = async (id: string) => {
        if (prayerLoading[id]) return;

        setPrayerLoading((prev) => ({ ...prev, [id]: true }));
        setStatusMessage(null);

        try {
            const response = await fetch(`/api/intentions/${id}/prayer`, {
                method: 'POST',
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.message);
            }

            setIntentions((previous) =>
                previous.map((intention) =>
                    intention.id === id
                        ? {
                              ...intention,
                              prayerCount: result.prayerCount ?? intention.prayerCount,
                          }
                        : intention
                )
            );
        } catch (err: any) {
            const message =
                err?.message && typeof err.message === 'string'
                    ? err.message
                    : t('wall.prayerError');
            setStatusMessage(message);
        } finally {
            setPrayerLoading((prev) => {
                const next = { ...prev };
                delete next[id];
                return next;
            });
        }
    };

    const formatDate = (iso: string) => {
        const date = new Date(iso);
        if (Number.isNaN(date.getTime())) {
            return '';
        }
        return date.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'short',
        });
    };

    return (
        <div className="flex flex-col gap-12">
            <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
                <div className="card-soft">
                    <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                        {t('form.title')}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('form.subtitle')}
                    </p>
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-[var(--color-ink)]"
                                >
                                    {t('form.name')}
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData((previous) => ({
                                            ...previous,
                                            name: event.target.value,
                                        }))
                                    }
                                    placeholder={t('form.namePlaceholder')}
                                    className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="category"
                                    className="text-sm font-semibold text-[var(--color-ink)]"
                                >
                                    {t('form.category')}
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={(event) =>
                                        setFormData((previous) => ({
                                            ...previous,
                                            category:
                                                event.target.value as IntentionCategory,
                                        }))
                                    }
                                    className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                                >
                                    {categories.map((categoryOption) => (
                                        <option
                                            key={categoryOption.value}
                                            value={categoryOption.value}
                                        >
                                            {t(
                                                `categories.${categoryOption.value}`
                                            )}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold text-[var(--color-ink)]"
                            >
                                {t('form.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(event) =>
                                    setFormData((previous) => ({
                                        ...previous,
                                        message: event.target.value,
                                    }))
                                }
                                rows={4}
                                placeholder={t('form.messagePlaceholder')}
                                className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                id="anonymous"
                                name="anonymous"
                                type="checkbox"
                                checked={formData.anonymous}
                                onChange={(event) =>
                                    setFormData((previous) => ({
                                        ...previous,
                                        anonymous: event.target.checked,
                                    }))
                                }
                                className="h-4 w-4 rounded border-white/60 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/40"
                            />
                            <label
                                htmlFor="anonymous"
                                className="text-sm text-[var(--color-subtle)]"
                            >
                                {t('form.anonymous')}
                            </label>
                        </div>
                        <p className="text-xs text-[var(--color-subtle)] leading-relaxed">
                            {t('form.moderationNotice')}
                        </p>
                        {formError && (
                            <p className="text-sm text-red-600">{formError}</p>
                        )}
                        {statusMessage && (
                            <p className="text-sm text-emerald-600">
                                {statusMessage}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="btn-primary-soft disabled:opacity-70"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('form.submitting') : t('form.submit')}
                        </button>
                    </form>
                </div>
                <aside className="card-soft">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                        {t('stats.title')}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-subtle)] leading-relaxed">
                        {t('stats.subtitle')}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/50 bg-white/70 p-4 text-center shadow-sm">
                            <p className="text-xl font-semibold text-[var(--color-primary)]">
                                {intentions.length}
                            </p>
                            <p className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                {t('stats.intentions')}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/50 bg-white/70 p-4 text-center shadow-sm">
                            <p className="text-xl font-semibold text-[var(--color-primary)]">
                                {totalPrayers}
                            </p>
                            <p className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                {t('stats.prayers')}
                            </p>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-[var(--color-subtle)] leading-relaxed">
                        {t('stats.notice')}
                    </p>
                </aside>
            </section>

            <section className="card-soft">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                            {t('wall.title')}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-subtle)]">
                            {t('wall.subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <select
                            value={selectedCategory}
                            onChange={(event) =>
                                setSelectedCategory(
                                    event.target.value as
                                        | IntentionCategory
                                        | 'all'
                                )
                            }
                            className="rounded-xl border border-white/60 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                            disabled={loading}
                        >
                            <option value="all">{t('filters.all')}</option>
                            {categories.map((categoryOption) => (
                                <option
                                    key={categoryOption.value}
                                    value={categoryOption.value}
                                >
                                    {t(`categories.${categoryOption.value}`)}
                                </option>
                            ))}
                        </select>
                        <input
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder={t('filters.search')}
                            className="rounded-xl border border-white/60 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                        />
                    </div>
                </div>
                {loading && (
                    <p className="mt-6 text-sm text-[var(--color-subtle)]">
                        {t('wall.loading')}
                    </p>
                )}
                {error && !loading && (
                    <p className="mt-6 text-sm text-red-600">{error}</p>
                )}
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredIntentions.map((intention) => (
                        <article
                            key={intention.id}
                            className="flex h-full flex-col gap-4 rounded-2xl border border-white/50 bg-white/80 p-5 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                                        categories.find(
                                            (item) =>
                                                item.value === intention.category
                                        )?.color || 'bg-slate-200 text-slate-900'
                                    }`}
                                >
                                    {t(`categories.${intention.category}`)}
                                </span>
                                <time
                                    dateTime={intention.createdAt}
                                    className="text-xs uppercase text-[var(--color-subtle)]"
                                >
                                    {formatDate(intention.createdAt)}
                                </time>
                            </div>
                            <p className="text-sm text-[var(--color-subtle)] leading-relaxed">
                                {intention.message}
                            </p>
                            <p className="text-xs font-semibold text-[var(--color-ink)] uppercase tracking-widest">
                                {intention.anonymous
                                    ? t('anonymous')
                                    : intention.name || t('anonymous')}
                            </p>
                            <button
                                type="button"
                                onClick={() => handlePrayer(intention.id)}
                                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-60"
                                disabled={Boolean(prayerLoading[intention.id])}
                            >
                                {prayerLoading[intention.id]
                                    ? t('wall.praying')
                                    : t('wall.offerPrayer')}
                                <span className="rounded-full bg-white/70 px-2 py-0.5 text-[var(--color-primary)]">
                                    {intention.prayerCount}
                                </span>
                            </button>
                        </article>
                    ))}
                </div>
                {!loading && filteredIntentions.length === 0 && (
                    <p className="mt-6 text-center text-sm text-[var(--color-subtle)]">
                        {t('wall.empty')}
                    </p>
                )}
            </section>
        </div>
    );
}
