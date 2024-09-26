// import { useTranslations } from 'next-intl';

// export default function Footer() {
//     const t = useTranslations('Footer');

//     return (
//         <div className="my-10 text-center">
//             <p>{t('copyright')}</p>
//             <p>
//                 <a
//                     href="https://cv-sergio-scardigno.vercel.app/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                 >
//                     {t('portfolio')}
//                 </a>
//             </p>
//         </div>
//     );
// }

import Image from 'next/image'; // Importa el componente de Next.js

export default function Footer() {
    return (
        <div className="my-10 px-8 md:px-32">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                {/* Lado izquierdo - Icono del programador */}
                <div className="flex items-center">
                    <a
                        href="https://cv-sergio-scardigno.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-button"
                    >
                        <span className="icon">
                            <img
                                src="/img/programmer.png"
                                alt="Desarrollado por Sergio Scardigno"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                        </span>
                    </a>
                </div>

                {/* Lado derecho - Logo de Fibra TV y texto */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/img/fibra.png"
                        width={100}
                        height={100}
                        alt="Fibra TV"
                        className="rounded-lg shadow-lg"
                    />
                    <small className="text-gray-600">
                        Impulsado por Fibra TV
                    </small>
                </div>
            </div>
        </div>
    );
}
