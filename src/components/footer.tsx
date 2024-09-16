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

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <div className="my-10 text-center">
            <p className="mt-5">
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
                            width={16}
                            height={16}
                        />
                    </span>
                </a>
            </p>
        </div>
    );
}
