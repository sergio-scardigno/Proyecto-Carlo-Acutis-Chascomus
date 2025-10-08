'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import '../../globals.css';

type ModerationStatus = 'pending' | 'approved' | 'rejected';

type AdminIntention = {
    id: string;
    name: string;
    message: string;
    category: string;
    status: ModerationStatus;
    prayerCount: number;
    createdAt: string;
};

const STATUS_OPTIONS: ModerationStatus[] = ['pending', 'approved', 'rejected'];

export default function AdminIntentionsPage() {
    const t = useTranslations('AdminIntentions');

    const [tokenInput, setTokenInput] = useState('');
    const [adminToken, setAdminToken] = useState('');
    const [statusFilter, setStatusFilter] = useState<ModerationStatus>('pending');
    const [intentions, setIntentions] = useState<AdminIntention[]>([]);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const storedToken = window.localStorage.getItem(
            'intentions-admin-token'
        );
        if (storedToken) {
            setTokenInput(storedToken);
            setAdminToken(storedToken);
        }
    }, []);

    const formattedIntentions = useMemo(
        () =>
            intentions.map((item) => ({
                ...item,
                createdLabel: new Date(item.createdAt).toLocaleString(),
            })),
        [intentions]
    );

    const fetchIntentions = useCallback(
        async (token: string, status: ModerationStatus) => {
            setLoading(true);
            setError(null);
            setFeedback(null);
            try {
                const response = await fetch(
                    `/api/intentions?status=${status}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'x-admin-token': token,
                        },
                        cache: 'no-store',
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data?.message || 'load');
                }

                    setIntentions(
                        (data.intentions || []).map((item: any) => ({
                            id: item.id,
                            name: item.name ?? '',
                            message: item.message ?? '',
                            category: item.category ?? '',
                            status: item.status ?? 'pending',
                            prayerCount: item.prayer_count ?? 0,
                            createdAt: item.created_at,
                        }))
                    );
            } catch (err: any) {
                console.error(err);
                setError(
                    err?.message && err.message !== 'load'
                        ? err.message
                        : t('errors.load')
                );
            } finally {
                setLoading(false);
            }
        },
        [t]
    );

    useEffect(() => {
        if (!adminToken) {
            setIntentions([]);
            return;
        }
        fetchIntentions(adminToken, statusFilter);
    }, [adminToken, statusFilter, fetchIntentions]);

    const handleSaveToken = () => {
        if (!tokenInput.trim()) {
            setError(t('errors.missingToken'));
            return;
        }
        setAdminToken(tokenInput.trim());
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(
                'intentions-admin-token',
                tokenInput.trim()
            );
        }
        setFeedback(t('messages.tokenSaved'));
        setError(null);
    };

    const handleAction = async (
        id: string,
        nextStatus: ModerationStatus | 'delete'
    ) => {
        if (!adminToken) {
            setError(t('errors.missingToken'));
            return;
        }

        const confirmed = window.confirm(t('actions.confirm'));
        if (!confirmed) return;

        try {
            setFeedback(null);
            setError(null);
            const url =
                nextStatus === 'delete'
                    ? `/api/intentions/${id}`
                    : `/api/intentions/${id}`;
            const response = await fetch(url, {
                method: nextStatus === 'delete' ? 'DELETE' : 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-token': adminToken,
                },
                body:
                    nextStatus === 'delete'
                        ? undefined
                        : JSON.stringify({ status: nextStatus }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                        (nextStatus === 'delete'
                            ? t('errors.delete')
                            : t('errors.update'))
                );
            }

            setFeedback(
                nextStatus === 'delete'
                    ? t('messages.deleted')
                    : t('messages.updated')
            );
            fetchIntentions(adminToken, statusFilter);
        } catch (err: any) {
            console.error(err);
            setError(err?.message || t('errors.update'));
        }
    };

    return (
        <div className="flex flex-col gap-10 hero">
            <section className="section-shell">
                <h1 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {t('title')}
                </h1>
                <p className="mt-3 text-sm text-[var(--color-subtle)] leading-relaxed">
                    {t('description')}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-[2fr,auto] md:items-end">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="admin-token"
                            className="text-sm font-semibold text-[var(--color-ink)]"
                        >
                            {t('tokenLabel')}
                        </label>
                        <input
                            id="admin-token"
                            type="password"
                            value={tokenInput}
                            onChange={(event) => setTokenInput(event.target.value)}
                            placeholder={t('tokenPlaceholder')}
                            className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                        />
                    </div>
                    <button
                        type="button"
                        className="btn-primary-soft"
                        onClick={handleSaveToken}
                    >
                        {t('saveToken')}
                    </button>
                </div>
                <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="status-filter"
                            className="text-sm font-semibold text-[var(--color-ink)]"
                        >
                            {t('statusLabel')}
                        </label>
                        <select
                            id="status-filter"
                            value={statusFilter}
                            onChange={(event) =>
                                setStatusFilter(event.target.value as ModerationStatus)
                            }
                            className="rounded-xl border border-white/60 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                        >
                            {STATUS_OPTIONS.map((status) => (
                                <option key={status} value={status}>
                                    {t(`statuses.${status}`)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="button"
                        className="btn-secondary-light w-fit"
                        onClick={() =>
                            adminToken && fetchIntentions(adminToken, statusFilter)
                        }
                        disabled={loading}
                    >
                        {t('refresh')}
                    </button>
                </div>
                {feedback && (
                    <p className="mt-4 text-sm text-emerald-600">{feedback}</p>
                )}
                {error && (
                    <p className="mt-4 text-sm text-red-600">{error}</p>
                )}
            </section>

            <section className="card-soft">
                {loading ? (
                    <p className="text-sm text-[var(--color-subtle)]">
                        {t('loading')}
                    </p>
                ) : formattedIntentions.length === 0 ? (
                    <p className="text-sm text-[var(--color-subtle)]">
                        {t('empty')}
                    </p>
                ) : (
                    <div className="grid gap-4">
                        {formattedIntentions.map((intention) => (
                            <article
                                key={intention.id}
                                className="flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                            {t('table.created')}: {intention.createdLabel}
                                        </span>
                                        <span className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                            {t('table.category')}: {intention.category}
                                        </span>
                                        <span className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                                            {t('table.prayerCount')}: {intention.prayerCount}
                                        </span>
                                    </div>
                                    <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                                        {t(`statuses.${intention.status}`)}
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-[var(--color-ink)] leading-relaxed">
                                    {intention.message}
                                </p>
                                <p className="text-xs text-[var(--color-subtle)] uppercase tracking-widest">
                                    {intention.name}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-3">
                                    {intention.status !== 'approved' && (
                                        <button
                                            type="button"
                                            className="btn-primary-soft text-xs"
                                            onClick={() =>
                                                handleAction(intention.id, 'approved')
                                            }
                                        >
                                            {t('actions.approve')}
                                        </button>
                                    )}
                                    {intention.status !== 'rejected' && (
                                        <button
                                            type="button"
                                            className="btn-secondary-light text-xs"
                                            onClick={() =>
                                                handleAction(intention.id, 'rejected')
                                            }
                                        >
                                            {t('actions.reject')}
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-full border border-[#b11f2b] px-4 py-2 text-xs font-semibold text-[#b11f2b] transition hover:bg-[#b11f2b] hover:text-white"
                                        onClick={() => handleAction(intention.id, 'delete')}
                                    >
                                        {t('actions.delete')}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
