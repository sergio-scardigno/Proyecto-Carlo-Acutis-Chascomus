import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './globals.css';

export default function Home() {
    const t = useTranslations('IndexPage');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-4 font-semibold text-center font-zapfino">
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

            <hr className="w-full border-t border-gray-300 my-4" />
            <p className="text-center text-base mb-4 mt-4">
                {t('bibliography-intro')}
            </p>
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/3IQF38Icrgw?si=EthKfFau--vgBseL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>



            {/* Separador */}
            <hr className="w-full border-t border-gray-300 my-4" />
            <Image
                src="/img/folleto.webp"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
            />


            <hr className="w-full border-t border-gray-300 my-4" />
            <p className="text-center text-2xl font-semibold mt-4">
                {t('who-is')}
                
            </p>
            

            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/9UHes5e8gU4?si=hMZkB-VvdZ9aWXy5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


            <hr className="w-full border-t border-gray-300 my-4" />
            <p className="text-center text-2xl font-semibold mt-4">
                {t('song-intro')}
            </p>
            <iframe
                className="mt-8"
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/mr2pfZZREOg?si=sDTvKSsCM8LmJDnp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <hr className="w-full border-t border-gray-300 my-4" />
        </div>
    );
}
