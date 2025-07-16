import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Un Momento de Silencio y Espera',
  description: 'Comunicado sobre la pausa en la canonización de Carlo Acutis. Información sobre los próximos pasos y el compromiso del proyecto en este tiempo de espera.',
  robots: {
    index: false, // Le pedimos a Google que no indexe esta página por ahora
    follow: true,
  },
  openGraph: {
    title: 'Un Momento de Silencio y Espera',
    description: 'Comunicado sobre la pausa en la canonización de Carlo Acutis.',
    images: [
      {
        url: '/img/splash_bkg_01.jpg', // Una imagen de fondo que tienes
        width: 1200,
        height: 630,
        alt: 'Fondo de la web del Proyecto Carlo Acutis',
      },
    ],
  },
};

export default function SilencioEspera() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-3xl text-yellow-800">
                UN MOMENTO DE SILENCIO Y ESPERA
            </h1>
            <div className="max-w-2xl bg-yellow-50 border border-yellow-400 rounded-lg shadow-lg p-6">
                <p className="mb-4 text-lg text-gray-800">
                    Con profundo dolor acompañamos la partida de nuestro amado
                    Papa Francisco, un pastor cercano, sencillo, y profundamente
                    unido a los jóvenes, a los pobres y a los santos de nuestra
                    época. Su amor por Carlo Acutis fue visible, sincero, y nos
                    llena de gratitud saber que bendijo con su mirada y su
                    corazón el camino hacia la canonización de este joven que
                    supo hacer de la Eucaristía su autopista al cielo.
                </p>
                <p className="mb-4 text-lg text-gray-800">
                    La repentina pérdida del Santo Padre detuvo muchos procesos
                    que estaban en marcha, entre ellos, la esperada
                    santificación de Carlo Acutis, que había sido confirmada y
                    estaba próxima a concretarse. Hoy, ese momento ha quedado en
                    pausa, suspendido en un tiempo de silencio, duelo y oración.
                </p>
                <p className="mb-4 text-lg text-gray-800">
                    Sin embargo, la esperanza no se apaga. Con la llegada del
                    nuevo Papa, León XIV, la Iglesia continúa su misión guiada
                    por el Espíritu Santo. Será él quien, en comunión con los
                    tiempos de Dios, determine la nueva fecha para celebrar la
                    canonización de nuestro querido Carlo. El 13 de junio se
                    definirá cuándo será esa jornada de alegría que tanto
                    anhelamos y por la que seguimos rezando.
                </p>
                <p className="mb-4 text-lg text-gray-800">
                    Mientras tanto, desde el Grupo Carlo Acutis Chascomús
                    Argentina, renovamos nuestro compromiso: seguir entronizando
                    su imagen, evangelizando con su testimonio, y manteniendo
                    viva su llama en los corazones de todos, especialmente de
                    los jóvenes.
                </p>
                <p className="mb-4 text-lg text-gray-800">
                    Carlo sigue caminando con nosotros. Y nosotros, con fe firme
                    y el corazón lleno de amor, seguimos caminando con él.
                </p>
            </div>
        </div>
    );
}
