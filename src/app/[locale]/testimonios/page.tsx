'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Testimonios = () => {
    const t = useTranslations('Testimonios'); // 'Oracion' debe coincidir con el namespace en es.json

    useEffect(() => {
        // Limpia cualquier instancia anterior de GraphComment
        const existingGraphComment = document.getElementById('graphcomment');
        if (existingGraphComment) {
            existingGraphComment.innerHTML = ''; // Limpia el contenido previo
        }

        // Evita cargar el script varias veces
        if (!document.getElementById('graphcomment-script')) {
            const script = document.createElement('script');
            script.id = 'graphcomment-script'; // Asigna un ID único al script
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;

            script.innerHTML = `
        var __semio__params = {
          graphcommentId: "Carlo-Acutis", // Asegúrate de usar tu propio ID de GraphComment
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

            document.body.appendChild(script);
        }

        // return () => {
        //     // Limpia el script y el contenedor de comentarios
        //     const script = document.getElementById('graphcomment-script');
        //     if (script) {
        //         document.body.removeChild(script);
        //     }
        //     const commentContainer = document.getElementById('graphcomment');
        //     if (commentContainer) {
        //         commentContainer.innerHTML = '';  // Limpia el contenido del contenedor
        //     }
        // };
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

            <div id="graphcomment" className="max-w-full"></div>
        </div>
    );
};

export default Testimonios;
