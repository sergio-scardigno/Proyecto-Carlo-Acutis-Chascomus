import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
    const t = useTranslations('IndexPage');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="text-4xl mb-4 font-semibold text-center">
                {t('title')}
            </h1>
            <p className="text-center mb-4">{t('description')}</p>
            {/* Separador */}
            <hr className="w-full border-t border-gray-300 my-4" />
            <Image
                src="/img/carlo-acutis.webp"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
            />
            <h2 className="text-2xl mb-2 font-semibold text-center mt-5">
                {t('title-prayer')}
            </h2>{' '}
            <p className="text-center mt-8">{t('prayer')}</p>
            {/* Separador */}
            <hr className="w-full border-t border-gray-300 my-4" />
            <p className="text-center text-2xl font-semibold mt-4">
                {t('song-intro')}
            </p>
            <iframe
                className="mt-8"
                width="400"
                height="315"
                src="https://www.youtube.com/embed/mr2pfZZREOg?si=sDTvKSsCM8LmJDnp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
}
