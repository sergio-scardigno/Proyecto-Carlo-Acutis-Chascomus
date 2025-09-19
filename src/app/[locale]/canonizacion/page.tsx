'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import InstagramEmbed from '@/components/InstagramEmbed';

export default function CanonizacionPage() {
  const t = useTranslations('Canonizacion');
  const router = useRouter();


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Botón de regreso */}
        <button 
          onClick={() => router.back()}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </button>

        {/* Contenido principal */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Imagen de cabecera */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="/img/canonizacion/canonizacion-carlo.jpg"
              alt="Carlo Acutis siendo canonizado"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                {t('titulo')}
              </h1>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-10 space-y-6">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-4">
                {t('fecha')} <span className="font-semibold">{t('lugar')}</span>, {t('evento')}
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 space-y-6">
              <p>{t('descripcion1')}</p>
              <p>{t('descripcion2')}</p>
              <p>{t('descripcion3')}</p>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 text-lg font-medium">
                  {t('mensajeEspecial')}
                  <a 
                    href="https://www.instagram.com/sancarloacutischascomus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    @sancarloacutischascomus
                  </a>
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Sobre la Ceremonia</h3>
                  <p className="text-gray-600">
                    La ceremonia de canonización fue presidida por el Papa León XIV en la Plaza de San Pedro, 
                    reuniendo a miles de fieles de todo el mundo. Fue un momento histórico para la Iglesia Católica, 
                    marcando la primera canonización de un santo de la generación millennial.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">El Legado de Carlo</h3>
                  <p className="text-gray-600">
                    Carlo Acutis nos deja un poderoso mensaje: la santidad es alcanzable en la vida cotidiana, 
                    incluso en la era digital. Su amor por la Eucaristía y su uso de la tecnología para difundir la fe 
                    continúan inspirando a jóvenes y adultos por igual.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Volver al inicio
                </Link>
              </div>

              {/* Instagram Video Embed */}
              <div className="mt-16 mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Mira este momento especial</h2>
                <div className="max-w-lg mx-auto bg-white p-1 rounded-lg shadow-lg overflow-hidden">
                  <InstagramEmbed url="https://www.instagram.com/reel/DOgHOgEiAL7/" />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Haz clic en el botón de reproducción para ver el video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
