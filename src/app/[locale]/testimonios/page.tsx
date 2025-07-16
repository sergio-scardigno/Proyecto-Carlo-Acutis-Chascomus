'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

const Testimonios = () => {
    const t = useTranslations('Testimonios');

    useEffect(() => {
        const existingGraphCommentWidget = document.getElementById(
            'graphcomment-widget'
        );
        if (existingGraphCommentWidget) {
            existingGraphCommentWidget.innerHTML = '';
        }

        const existingGraphComment = document.getElementById('graphcomment');
        if (existingGraphComment) {
            existingGraphComment.innerHTML = '';
        }

        if (!document.getElementById('graphcomment-script')) {
            const scriptWidget = document.createElement('script');
            scriptWidget.id = 'graphcomment-script';
            scriptWidget.src = 'https://graphcomment.com/js/widget.js';
            scriptWidget.async = true;
            scriptWidget.defer = true;

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

            document.body.appendChild(scriptWidget);
        }

        if (!document.getElementById('graphcomment-script-custom')) {
            const scriptCustom = document.createElement('script');
            scriptCustom.id = 'graphcomment-script-custom';
            scriptCustom.type = 'text/javascript';
            scriptCustom.async = true;
            scriptCustom.defer = true;

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

            document.body.appendChild(scriptCustom);
        }

        const modifyCommentTabs = () => {
            const tabs = document.querySelectorAll(
                'li.svelte-umelhy a.svelte-umelhy'
            );
            tabs.forEach((tab) => {
                if (tab.textContent === 'Últimos comentarios') {
                    tab.textContent = 'Últimos testimonios';
                } else if (tab.textContent === 'Los mejores comentarios') {
                    tab.textContent = 'Los mejores testimonios';
                }
            });
        };

        setTimeout(modifyCommentTabs, 1000);
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

            <div id="graphcomment-widget" className="max-w-full mb-8"></div>

            <div id="graphcomment" className="max-w-full"></div>
        </div>
    );
};

export default Testimonios;
