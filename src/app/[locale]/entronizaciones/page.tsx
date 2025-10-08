'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import '../globals.css';

type Entronizacion = {
    lugar: string;
    region: 'Buenos Aires' | 'CABA';
    fecha?: string;
    descripcion: string;
    imagenes: string[];
    tags?: string[];
};

const entronizaciones: Entronizacion[] = [
    {
        lugar: 'Basílica de Luján',
        region: 'Buenos Aires',
        descripcion:
            'Vivimos un acontecimiento trascendental en la historia de nuestra fe: la entronización de la imagen de Carlo Acutis en la Basílica de Nuestra Señora de Luján, el corazón espiritual de Argentina. Agradecemos al Padre Lucas García por su generosidad y compromiso.',
        imagenes: ['/img/entronizaciones/Basílica de Luján.jpg'],
        tags: ['Mariana', 'Peregrinos'],
    },
    {
        lugar: 'Chascomús - Catedral Nuestra Señora de la Merced',
        region: 'Buenos Aires',
        descripcion:
            'Entronización de Carlo Acutis en la Catedral de Chascomús, un momento de profunda fe y devoción para la comunidad.',
        imagenes: [
            '/img/entronizaciones/Catedral Nuestra Señora de la Merced CHASCOMUS.jpg',
        ],
        tags: ['Catedral', 'Juventud'],
    },
    {
        lugar: 'Las Armas - Capilla Nuestra Señora de Luján',
        region: 'Buenos Aires',
        descripcion:
            'Compartimos la emotiva entronización de Carlo Acutis en Las Armas. La misa fue presidida por Monseñor José María Baliña.',
        imagenes: [
            '/img/entronizaciones/Las Armas.jpg',
            '/img/entronizaciones/Las Armas2.jpg',
        ],
        tags: ['Rural', 'Familias'],
    },
    {
        lugar: 'Labardén - Parroquia Sagrado Corazón de Jesús',
        region: 'Buenos Aires',
        descripcion:
            'Entronización de Carlo Acutis presidida por Monseñor José María Baliña, con un profundo espíritu de fe y emoción.',
        imagenes: ['/img/entronizaciones/Labarden.jpg'],
        tags: ['Parroquia', 'Misión'],
    },
    {
        lugar: 'General Guido - Parroquia Nuestra Señora de la Merced',
        region: 'Buenos Aires',
        descripcion:
            'La comunidad de General Guido recibió la imagen de Carlo Acutis con gran devoción. Presidida por Monseñor José María Baliña.',
        imagenes: ['/img/entronizaciones/Gral Guido.jpg'],
        tags: ['Parroquia', 'Juventud'],
    },
    {
        lugar: 'Castelli - Parroquia Santa Rosa de Lima',
        region: 'Buenos Aires',
        descripcion:
            'Celebración de la entronización de Carlo Acutis en Castelli, presidida por el Padre Ezequiel. Incluyó el testimonio de Carlos Bonicalzi.',
        imagenes: ['/img/entronizaciones/CASTELLI.jpg'],
        tags: ['Testimonios', 'Parroquia'],
    },
    {
        lugar: 'FIBRA TV - Chascomús',
        region: 'Buenos Aires',
        descripcion:
            'Se entronizó la imagen de Carlo Acutis traída desde Asís, con bendición del Obispo Juan Ignacio Liebana y participación de Scouts y Bomberos.',
        imagenes: ['/img/entronizaciones/FIBRA TV CHASCOMUS.jpg'],
        tags: ['Medios', 'Juventud'],
    },
    {
        lugar: 'Dolores - Merendero San Juan Bautista',
        region: 'Buenos Aires',
        descripcion:
            'Agradecimiento profundo por hacer posible esta hermosa entronización. Un momento de fe, amor y unión que quedará en el corazón de todos.',
        imagenes: [
            '/img/entronizaciones/Merendero SAN JUAN BAUTISTA DOLORES.jpg',
            '/img/entronizaciones/Merendero SAN JUAN BAUTISTA DOLORES2.jpg',
        ],
        tags: ['Solidaridad', 'Familias'],
    },
    {
        lugar: 'Roque Pérez - Iglesia de Roque Pérez',
        region: 'Buenos Aires',
        descripcion:
            'Momento inolvidable con la entronización del Beato Carlo Acutis. Una jornada cargada de fe y emoción.',
        imagenes: [
            '/img/entronizaciones/Roque Pérez Buenos Aires.jpg',
            '/img/entronizaciones/Roque Pérez Buenos Aires2.jpg',
        ],
        tags: ['Procesión', 'Juventud'],
    },
    {
        lugar: 'Capital Federal - Iglesia del Santísimo Sacramento',
        region: 'CABA',
        descripcion:
            'La entronización de Carlo Acutis fue una ceremonia muy emotiva y emocionante. La misa estuvo a cargo del padre Rafael Emilio Caceres Olave.',
        imagenes: ['/img/entronizaciones/santisimo-sacramento.jpg'],
        tags: ['CABA', 'Histórico'],
    },
    {
        lugar: 'Buenos Aires - UCA (Campus Puerto Madero)',
        region: 'CABA',
        descripcion:
            'La UCA inauguró el Oratorio "Carlos Acutis" en el Edif. Santo Tomás Moro, con misa previa en la Iglesia del Corazón de Jesús.',
        imagenes: [
            '/img/entronizaciones/Esas en la UCA Puerto Madero.jpg',
            '/img/entronizaciones/Esas en la UCA Puerto Madero2.jpg',
        ],
        tags: ['Universidad', 'Juventud'],
    },
    {
        lugar: 'Verónica - Iglesia de Lourdes',
        region: 'Buenos Aires',
        descripcion:
            'Una celebración con fe, esperanza y gratitud. Participaron los bomberos y el grupo Scout de la ciudad.',
        imagenes: [
            '/img/entronizaciones/Verónica Pinta Indio.jpg',
            '/img/entronizaciones/Verónica Pinta Indio2.jpg',
        ],
        tags: ['Scout', 'Familias'],
    },
    {
        lugar: 'Lezama - Parroquia Cristo Rey',
        region: 'Buenos Aires',
        descripcion:
            'Entronización de Carlo Acutis en Lezama, un momento de profunda fe y devoción para la comunidad.',
        imagenes: ['/img/entronizaciones/LEZAMA.jpg'],
        tags: ['Parroquia', 'Juventud'],
    },
    {
        lugar: 'Chascomús - Iglesia Nuestra Señora de Luján',
        region: 'Buenos Aires',
        fecha: '8 de junio de 2025',
        descripcion:
            'La entronización de la imagen de Carlo Acutis en la Iglesia de Nuestra Señora de Luján de Chascomús congregó a familias, jóvenes y peregrinos, con un fuerte compromiso de misión.',
        imagenes: [
            '/img/entronizaciones/chascomus/entronizacion-iglesia-lujan-chascomus-1.jpg',
            '/img/entronizaciones/chascomus/entronizacion-iglesia-lujan-chascomus-2.jpg',
            '/img/entronizaciones/chascomus/entronizacion-iglesia-lujan-chascomus-3.jpg',
            '/img/entronizaciones/chascomus/entronizacion-iglesia-lujan-chascomus-4.jpg',
        ],
        tags: ['Misión', 'Juventud'],
    },
];

export default function EntronizacionesPage() {
    const t = useTranslations('EnthronementsPage');
    const [selectedRegion, setSelectedRegion] = useState<'all' | 'Buenos Aires' | 'CABA'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedPlace, setExpandedPlace] = useState<string | null>(null);

    const regiones = useMemo(
        () =>
            Array.from(new Set(entronizaciones.map((entr) => entr.region))).sort(),
        []
    );

    const filteredEntronizaciones = useMemo(() => {
        return entronizaciones
            .filter((entr) =>
                selectedRegion === 'all' ? true : entr.region === selectedRegion
            )
            .filter((entr) => {
                if (!searchTerm.trim()) return true;
                const needle = searchTerm.toLowerCase();
                return (
                    entr.lugar.toLowerCase().includes(needle) ||
                    entr.descripcion.toLowerCase().includes(needle)
                );
            });
    }, [selectedRegion, searchTerm]);

    const encodeSrc = (path: string) => encodeURI(path);

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

            <section className="card-soft">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="region"
                                className="text-xs font-semibold uppercase tracking-widest text-[var(--color-subtle)]"
                            >
                                {t('filters.region')}
                            </label>
                            <select
                                id="region"
                                value={selectedRegion}
                                onChange={(event) =>
                                    setSelectedRegion(
                                        event.target.value as
                                            | 'all'
                                            | 'Buenos Aires'
                                            | 'CABA'
                                    )
                                }
                                className="rounded-xl border border-white/60 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                            >
                                <option value="all">{t('filters.all')}</option>
                                {regiones.map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 md:ml-4">
                            <label
                                htmlFor="search"
                                className="text-xs font-semibold uppercase tracking-widest text-[var(--color-subtle)]"
                            >
                                {t('filters.search')}
                            </label>
                            <input
                                id="search"
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder={t('filters.placeholder')}
                                className="rounded-xl border border-white/60 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setSelectedRegion('all');
                            setSearchTerm('');
                        }}
                        className="btn-secondary-light self-start md:self-auto"
                    >
                        {t('filters.reset')}
                    </button>
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-subtle)]">
                    {t('stats.total', { count: filteredEntronizaciones.length })}
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {filteredEntronizaciones.map((entr) => {
                    const isExpanded = expandedPlace === entr.lugar;
                    const cover = encodeSrc(entr.imagenes[0]);
                    const gallery = entr.imagenes.slice(1).map(encodeSrc);

                    return (
                        <article
                            key={entr.lugar}
                            className="flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="overflow-hidden rounded-2xl border border-white/60 bg-black/20">
                                <Image
                                    src={cover}
                                    alt={entr.lugar}
                                    width={640}
                                    height={360}
                                    className="h-48 w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                                    {entr.region}
                                </span>
                                {entr.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-subtle)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                                    {entr.lugar}
                                </h2>
                                {entr.fecha && (
                                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                                        {entr.fecha}
                                    </p>
                                )}
                                <p className="text-sm text-[var(--color-subtle)]">
                                    {entr.descripcion}
                                </p>
                            </div>
                            {gallery.length > 0 && (
                                <div className="space-y-3 rounded-2xl border border-white/60 bg-white/70 p-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setExpandedPlace(
                                                isExpanded ? null : entr.lugar
                                            )
                                        }
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                                    >
                                        {isExpanded
                                            ? t('gallery.collapse')
                                            : t('gallery.expand')}
                                        <span aria-hidden="true">
                                            {isExpanded ? '↑' : '↓'}
                                        </span>
                                    </button>
                                    {isExpanded && (
                                        <div className="grid grid-cols-2 gap-3">
                                            {gallery.map((image, index) => (
                                                <Image
                                                    key={image}
                                                    src={image}
                                                    alt={t('gallery.alt', {
                                                        place: entr.lugar,
                                                        index: index + 2,
                                                    })}
                                                    width={320}
                                                    height={200}
                                                    className="h-32 w-full rounded-xl object-cover"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </article>
                    );
                })}
                {filteredEntronizaciones.length === 0 && (
                    <p className="col-span-full text-center text-sm text-[var(--color-subtle)]">
                        {t('empty')}
                    </p>
                )}
            </section>
        </div>
    );
}
