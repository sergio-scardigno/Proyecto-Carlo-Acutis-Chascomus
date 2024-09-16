// 'use client';

// import { useLocale } from 'next-intl';
// import { useRouter } from 'next/navigation';
// import { ChangeEvent, useTransition } from 'react';

// export default function LocalSwitcher() {
//     const [isPending, startTransition] = useTransition();
//     const router = useRouter();
//     const localActive = useLocale();

//     const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const nextLocale = e.target.value;
//         startTransition(() => {
//             router.replace(`/${nextLocale}`);
//         });
//     };
//     return (
//         <label className="border-2 rounded">
//             <p className="sr-only">change language</p>
//             <select
//                 defaultValue={localActive}
//                 className="bg-transparent py-2"
//                 onChange={onSelectChange}
//                 disabled={isPending}
//             >
//                 <option value="en">English</option>
//                 <option value="es">Spanish</option>
//             </select>
//         </label>
//     );
// }

'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    const pathname = usePathname(); // Obtener la ruta actual

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            // Reemplazar la ruta actual con el nuevo idioma
            const newPathname = pathname.replace(
                `/${localeActive}`,
                `/${nextLocale}`
            );
            router.replace(newPathname);
        });
    };

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select
                defaultValue={localeActive}
                className="bg-transparent py-2"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
        </label>
    );
}
