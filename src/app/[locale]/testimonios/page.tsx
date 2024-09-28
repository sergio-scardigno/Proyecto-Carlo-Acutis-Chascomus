'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Testimonios = () => {
    const t = useTranslations('Testimonios'); // 'Testimonios' debe coincidir con el namespace en es.json

    useEffect(() => {
        // Limpiar cualquier instancia anterior de los widgets
        const existingGraphCommentWidget = document.getElementById(
            'graphcomment-widget'
        );
        if (existingGraphCommentWidget) {
            existingGraphCommentWidget.innerHTML = ''; // Limpia el contenido previo del widget
        }

        const existingGraphComment = document.getElementById('graphcomment');
        if (existingGraphComment) {
            existingGraphComment.innerHTML = ''; // Limpia el contenido previo de la caja de comentarios personalizada
        }

        // Evitar cargar el script del widget más de una vez
        if (!document.getElementById('graphcomment-script')) {
            const scriptWidget = document.createElement('script');
            scriptWidget.id = 'graphcomment-script'; // Asigna un ID único al script
            scriptWidget.src = 'https://graphcomment.com/js/widget.js'; // Carga el script del widget de GraphComment
            scriptWidget.async = true;
            scriptWidget.defer = true;

            // Inicializa el widget una vez que el script se haya cargado
            scriptWidget.onload = () => {
                const widgetElement = document.getElementById(
                    'graphcomment-widget'
                );

                if (window.graphcommentWidget && widgetElement) {
                    window.graphcommentWidget(widgetElement, {
                        graphcomment_id: 'Carlo-Acutis',
                        defaultTab: 'last_comments',
                        tabs: ['last_comments', 'top_comments'],
                        labels: {
                            last_comments: '',
                            top_comments: '',
                            top_threads: '',
                        },
                        period: '90 days',
                        limit: 25,
                        height: null,
                        openLinksNewWindow: true,
                        showVotes: true,
                        locale: 'es',
                    });
                } else {
                    console.error('GraphComment widget or element not found.');
                }
            };

            document.body.appendChild(scriptWidget); // Añade el script al body
        }

        // Evitar cargar el script personalizado más de una vez
        if (!document.getElementById('graphcomment-script-custom')) {
            const scriptCustom = document.createElement('script');
            scriptCustom.id = 'graphcomment-script-custom'; // Asigna un ID único al script
            scriptCustom.type = 'text/javascript';
            scriptCustom.async = true;
            scriptCustom.defer = true;

            // Añadir el código del script personalizado
            scriptCustom.innerHTML = `
                var __semio__params = {
                    graphcommentId: "Carlo-Acutis",
                };

                function __semio__onload() {
                    __semio__gc_graphlogin(__semio__params);
                }

                (function() {
                    var gc = document.createElement('script');
                    gc.type = 'text/javascript';
                    gc.async = true;
                    gc.defer = true;
                    gc.onload = __semio__onload;
                    gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
                })();
            `;

            document.body.appendChild(scriptCustom); // Añade el script al body
        }

        // Función para cambiar el texto de "Últimos comentarios" a "Últimos testimonios" y "Mejores comentarios" a "Mejores testimonios"
        const modifyCommentTabs = () => {
            const tabs = document.querySelectorAll(
                'li.svelte-umelhy a.svelte-umelhy'
            );
            tabs.forEach((tab) => {
                if (tab.textContent === 'Últimos comentarios') {
                    tab.textContent = 'Últimos testimonios'; // Cambia el texto
                } else if (tab.textContent === 'Los mejores comentarios') {
                    tab.textContent = 'Los mejores testimonios'; // Cambia el texto
                }
            });
        };

        // Esperar un breve tiempo para que el widget se cargue completamente antes de hacer el cambio
        setTimeout(modifyCommentTabs, 1000); // Ajusta el tiempo si es necesario (aumentado a 1000ms)
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 font-semibold text-center text-4xl lg:text-5xl font-zapfino title-testimonios">
                {t('title')}
            </h1>

            <div className="max-w-prose mx-auto mb-8">
                <p className="mb-4 text-lg md:text-xl">{t('intro')}</p>
                <p className="mb-4 text-lg md:text-xl">{t('intro2')}</p>
                <p className="mb-4 text-lg md:text-xl">{t('intro3')}</p>
            </div>

            {/* Widget de GraphComment */}
            <div id="graphcomment-widget" className="max-w-full mb-8"></div>

            {/* Caja de comentarios personalizada */}
            <div id="graphcomment" className="max-w-full"></div>
        </div>
    );
};

export default Testimonios;
