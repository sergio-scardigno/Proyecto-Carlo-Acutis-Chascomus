import { useTranslations } from 'next-intl';
import './videos.css';

export default function Oracion() {
    const t = useTranslations('Videos'); // 'Oracion' debe coincidir con el namespace en es.json

    return (
        <div className="">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-6xl">
                {t('title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">{t('video1')}</p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/euv57BSyAgg?si=KbFHMMsVWdg8pxk_" 
                    title="YouTube video player"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    </div>
                </div>

                {/* <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-4">{t('video2')}</h2>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/video2URL"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div> */}

                {/* Agrega más videos como sea necesario */}
            </div>
        </div>
    );
}
