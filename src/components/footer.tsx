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
            <p>{t('copyright')}</p>
            <p className="mt-5">
                <a
                    href="https://cv-sergio-scardigno.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button"
                >
                    <span className="icon">
                        {/* Aquí puedes usar un ícono o imagen */}
                        <img
                            src="/img/programmer.png"
                            alt="icon"
                            width={16}
                            height={16}
                        />
                    </span>
                    <span className="text-footer-sign">{t('portfolio')}</span>
                </a>
            </p>
        </div>
    );
}
