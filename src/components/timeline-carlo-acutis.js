// pages/timeline.js
'use client';

import { Chrono } from 'react-chrono';

const Timeline = () => {
    const items = [
        {
            title: '10 de octubre, 18:00',
            cardTitle: 'Ceremonia en Fibra TV',
            cardSubtitle:
                'Inicio del evento en Fibra TV, calle Belgrano y Soler',
            cardDetailedText:
                'En el local de Fibra TV se colocará la imagen del Beato Carlo Acutis, traída desde Asís, Italia, desde la Parroquia de Santa María la Mayor.',
        },
        {
            title: '10 de octubre, 18:15',
            cardTitle: 'Bendición de la imagen',
            cardSubtitle: 'Realizada por el Obispo Mons. Juan Ignacio Liébana',
            cardDetailedText:
                'La imagen será bendecida por el Obispo diocesano y quedará inaugurado el punto de wi-fi gratuito Carlo Acutis en el lugar.',
        },
        {
            title: '10 de octubre, 18:45',
            cardTitle: 'Procesión hacia la Catedral',
            cardSubtitle:
                'Recorrido hasta la Iglesia Catedral "Nuestra Señora de la Merced"',
            cardDetailedText:
                'Los presentes realizarán una procesión desde la esquina de Belgrano y Soler hasta la Catedral, acompañando otra imagen del beato.',
        },
        {
            title: '10 de octubre, 19:30',
            cardTitle: 'Santa Misa en la Catedral',
            cardSubtitle: 'Iglesia Catedral "Nuestra Señora de la Merced"',
            cardDetailedText:
                'Al llegar a la Catedral, se celebrará la Santa Misa en honor a Carlo Acutis, quien falleció el 10 de octubre de 2016 a los 15 años.',
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
                    primary: 'black', // Color principal rojo
                    secondary: 'white', // Color secundario gris
                    cardBgColor: 'white', // Fondo de las tarjetas en blanco
                    titleColor: 'black', // Color de los títulos en negro
                    titleColorActive: '#be1621', // Color del título activo en rojo
                }}
                fontSizes={{
                    title: '20px', // Tamaño de las letras de los títulos
                    cardTitle: '40px', // Tamaño de las letras en los títulos de las tarjetas
                    cardSubtitle: '15px', // Tamaño de los subtítulos de las tarjetas
                    cardDetailedText: '10px', // Tamaño del texto detallado
                }}
            />
        </div>
    );
};

export default Timeline;
