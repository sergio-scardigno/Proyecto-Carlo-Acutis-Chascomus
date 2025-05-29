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
            <h2 className="text-3xl font-semibold mb-4 title-entronaciones">
                {' '}
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 gap-8 w-full">
                {/* Video Entronización */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('entronizacion-bsas')}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-12 h-64 md:h-500px">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/PZYsdxbZRFU?si=ceMX472AJ4wzMuVI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 w-full mt-5">
                {/* Video Entronización */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        {t('entronizacion')}
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-12 h-64 md:h-500px">
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

                {/* Video Guadalupe García Corigliano */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        Guadalupe García Corigliano es una joven argentina
                        conocida por su participación activa en la
                        evangelización a través de redes sociales y medios
                        digitales. Se ha convertido en una referente de la
                        &quot;Iglesia Millennial&quot; en Argentina, impulsando
                        espacios de encuentro, oración y testimonio
                        especialmente orientados a los jóvenes.
                        <br />
                        <br />
                        Es muy cercana a ambientes eclesiales contemporáneos y
                        ha trabajado en colaboración con proyectos como
                        &quot;Católicos en red&quot;, &quot;Misa Joven&quot;, y
                        otros eventos que buscan renovar la fe juvenil con
                        lenguaje y formatos actuales.
                        <br />
                        <br />
                        Guadalupe también ha sido invitada a programas de
                        televisión católicos y eventos diocesanos, donde
                        comparte su experiencia de fe, su camino personal y su
                        misión de anunciar a Jesús con alegría, creatividad y
                        autenticidad.
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/WEL1cyQLlZ0"
                            title="Guadalupe García Corigliano"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>

                {/* Video Rector de la Basílica de la Mercè */}
                <div className="flex flex-col items-center">
                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        El actual rector de la Basílica de la Mercè en Barcelona
                        es el Padre Fermín Delgado, sacerdote de la Orden de la
                        Merced. Desde su nombramiento en diciembre de 2023, ha
                        liderado esta emblemática iglesia, promoviendo la
                        devoción a la Virgen de la Merced y fortaleciendo su
                        papel como centro espiritual y social en la ciudad.
                    </p>

                    <p className="text-base font-bold mb-4 text-gray-800 tracking-wider drop-shadow-lg">
                        El Padre Fermín ha sido una figura destacada en diversas
                        iniciativas pastorales y sociales. Por ejemplo, ha
                        participado activamente en la acogida de reclusas del
                        centro penitenciario de Wad-Ras durante las
                        celebraciones de la Mercè, promoviendo la inclusión y el
                        acompañamiento espiritual.
                    </p>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/l4NlzeUuFAM"
                            title="Padre Fermín Delgado - Basílica de la Mercè"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
