import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Beato Carlo Acutis | Proyecto Chascomús',
    template: '%s | Carlo Acutis Chascomús',
  },
  description: 'Sitio oficial del Proyecto Carlo Acutis en Chascomús. Encuentra oraciones, novenas, testimonios, y noticias sobre las entronizaciones de sus reliquias.',
  metadataBase: new URL('https://carloacutis.net.ar'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'Beato Carlo Acutis | Proyecto Chascomús',
    description: 'Sitio oficial del Proyecto Carlo Acutis en Chascomús. Oraciones, novenas, testimonios y noticias.',
    url: 'https://carloacutis.net.ar',
    siteName: 'Carlo Acutis Chascomús',
    images: [
      {
        url: '/img/carlo-acutis.webp', // URL de tu imagen principal
        width: 800,
        height: 600,
        alt: 'Imagen del Beato Carlo Acutis',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    let messages;
    try {
        // Ajusta la ruta de importación de los mensajes
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        // Si no encuentra las traducciones, muestra un 404
        notFound();
    }

    return (
        <html lang={locale} className="bg-mosaic">
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="flex flex-col min-h-screen max-w-6xl mx-auto content-body">
                        <Header />
                        <div className="flex-grow mt-16">{children}</div>
                    </div>
                </NextIntlClientProvider>
                <Footer />
            </body>
        </html>
    );
}
