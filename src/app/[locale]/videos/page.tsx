import { useTranslations } from 'next-intl';
import './videos.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos sobre Carlo Acutis',
  description: 'Colección de videos sobre la vida, obra y devoción al Beato Carlo Acutis. Incluye entronizaciones, testimonios y documentales.',
  openGraph: {
    title: 'Videos sobre Carlo Acutis',
    description: 'Colección de videos sobre la vida, obra y devoción al Beato Carlo Acutis.',
    images: [
      {
        url: '/img/programmer.png', // Usaremos una imagen genérica que tienes
        width: 512,
        height: 512,
        alt: 'Ilustración de un programador, representando a Carlo Acutis',
      },
    ],
  },
};


const videos = [
    {
        key: 'entronizacion-bsas',
        src: 'https://www.youtube.com/embed/PZYsdxbZRFU?si=ceMX472AJ4wzMuVI',
    },
    {
        key: 'entronizacion',
        src: 'https://www.youtube.com/embed/dH65bOVBegk?si=BJ7tQ4eXZ63tviah',
    },
    {
        key: 'video1',
        src: 'https://www.youtube.com/embed/euv57BSyAgg?si=KbFHMMsVWdg8pxk_',
    },
    {
        key: 'who-is',
        src: 'https://www.youtube.com/embed/9UHes5e8gU4?si=hMZkB-VvdZ9aWXy5',
    },
    {
        key: 'bibliography-intro',
        src: 'https://www.youtube.com/embed/mr2pfZZREOg?si=sDTvKSsCM8LmJDnp',
    },
    {
        title: 'Saludos de Antonia, la Madre de Carlo Acutis',
        src: 'https://www.youtube.com/embed/m6Ou6Sxyq5o',
    },
    {
        title: 'Guadalupe García Corigliano',
        src: 'https://www.youtube.com/embed/WEL1cyQLlZ0',
    },
    {
        title: 'Padre Fermín Delgado - Basílica de la Mercè',
        src: 'https://www.youtube.com/embed/l4NlzeUuFAM',
    },
];

export default function Oracion() {
    const t = useTranslations('Videos');

    return (
        <div className="px-4 py-10">
            <h2 className="text-4xl font-semibold text-center text-red-700 mb-12">
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {videos.map((video, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center bg-white p-4 shadow rounded-lg"
                    >
                        <p className="text-base font-bold mb-4 text-gray-800 tracking-wide drop-shadow-lg">
                            {video.title || t(video.key)}
                        </p>
                        <div className="w-full aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-full rounded"
                                src={video.src}
                                title={video.title || `Video ${idx + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
