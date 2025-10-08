// pages/timeline.js
'use client';

import { Chrono } from 'react-chrono';
import { useTranslations } from 'next-intl';

const Timeline = () => {
    const t = useTranslations('Ceremony'); // El namespace es 'Ceremony'

    const items = [
        {
            title: t('event1.title'),
            cardTitle: t('event1.cardTitle'),
            cardSubtitle: t('event1.cardSubtitle'),
            cardDetailedText: t('event1.cardDetailedText'),
        },
        {
            title: t('event2.title'),
            cardTitle: t('event2.cardTitle'),
            cardSubtitle: t('event2.cardSubtitle'),
            cardDetailedText: t('event2.cardDetailedText'),
        },
        {
            title: t('event3.title'),
            cardTitle: t('event3.cardTitle'),
            cardSubtitle: t('event3.cardSubtitle'),
            cardDetailedText: t('event3.cardDetailedText'),
        },
        {
            title: t('event4.title'),
            cardTitle: t('event4.cardTitle'),
            cardSubtitle: t('event4.cardSubtitle'),
            cardDetailedText: t('event4.cardDetailedText'),
        },
    ];

    return (
        <div className="h-[480px] w-full">
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                slideShow={false}
                cardWidth={320}
                useReadMore={true}
                buttonTexts={{
                    first: t('controls.first'),
                    last: t('controls.last'),
                    next: t('controls.next'),
                    previous: t('controls.previous'),
                }}
                theme={{
                    primary: '#b11f2b',
                    secondary: '#fef4ea',
                    cardBgColor: '#ffffff',
                    cardForeColor: '#2c2a29',
                    titleColor: '#746d6a',
                    titleColorActive: '#b11f2b',
                }}
                fontSizes={{
                    title: '16px',
                    cardTitle: '20px',
                    cardSubtitle: '14px',
                    cardDetailedText: '13px',
                }}
                classNames={{
                    card: 'shadow-lg border border-white/70 rounded-2xl',
                }}
            />
        </div>
    );
};

export default Timeline;
