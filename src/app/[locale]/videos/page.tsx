import { useTranslations } from 'next-intl';
import './videos.css';

export default function Oracion() {
    const t = useTranslations('Videos'); // 'Oracion' debe coincidir con el namespace en es.json

    return (
        <div className="">
            {/* <h1 className="mb-8 font-semibold text-center font-zapfino text-6xl">
                {t('title')}
            </h1> */}

            {/* Sección Entronizaciones */}
            <h2 className="text-3xl font-semibold mb-4"> {t('title')}</h2>

            <div className="grid grid-cols-1 gap-8 w-full">
                {/* Video Entronización */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('entronizacion-bsas')}
                    </p>
                    <div
                        className="w-full aspect-w-16 aspect-h-12"
                        style={{ height: '500px' }}
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/PZYsdxbZRFU?si=ceMX472AJ4wzMuVI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 w-full">
                {/* Video Entronización */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('entronizacion')}
                    </p>
                    <div
                        className="w-full aspect-w-16 aspect-h-12"
                        style={{ height: '500px' }}
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dH65bOVBegk?si=BJ7tQ4eXZ63tviah"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Sección Más Videos */}
            <h2 className="text-3xl font-semibold mt-12 mb-4">Más Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Primer video */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('video1')}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/euv57BSyAgg?si=KbFHMMsVWdg8pxk_"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>

                {/* Segundo video */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('who-is')}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/9UHes5e8gU4?si=hMZkB-VvdZ9aWXy5"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>

                {/* Tercer video */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('bibliography-intro')}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/mr2pfZZREOg?si=sDTvKSsCM8LmJDnp"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>

                {/* Cuarto video */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {/* {t('video2')} */}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        {/* <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/exampleURL2"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
