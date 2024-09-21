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
        <div style={{ width: '100%', height: '500px' }}>
            <Chrono
                items={items}
                mode="VERTICAL"
                slideShow
                slideItemDuration={3000}
                hideControls={true}
                buttonTexts={{
                    first: 'Jump to First',
                    last: 'Jump to Last',
                    next: 'Next',
                    previous: 'Previous',
                }}
                theme={{
                    primary: 'black',
                    secondary: 'white',
                    cardBgColor: 'white',
                    titleColor: 'black',
                    titleColorActive: '#be1621',
                }}
                fontSizes={{
                    title: '20px',
                    cardTitle: '40px',
                    cardSubtitle: '15px',
                    cardDetailedText: '10px',
                }}
            />
        </div>
    );
};

export default Timeline;
