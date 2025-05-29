import Image from 'next/image';

export default function Entronizaciones() {
    const entronizaciones = [
        // Manuales (con imagen)
        {
            lugar: 'Basílica de Luján',
            fecha: '',
            descripcion:
                'Vivimos un acontecimiento trascendental en la historia de nuestra fe: la entronización de la imagen de Carlo Acutis en la Basílica de Nuestra Señora de Luján, el corazón espiritual de Argentina. Agradecemos al Padre Lucas García por su generosidad y compromiso.',
            imagen: '/img/entronizaciones/lujan.jpg',
        },
        {
            lugar: 'Maipú - Parroquia Nuestra Señora del Rosario',
            fecha: '16 de marzo 2025',
            descripcion:
                'Celebramos la entronización de la imagen de Carlo Acutis en la Parroquia Nuestra Señora del Rosario en Maipú, Provincia de Buenos Aires. Presidida por Monseñor José María Baliña.',
            imagenes: [
                '/img/entronizaciones/maipu1.jpg',
                '/img/entronizaciones/maipu2.jpg',
            ],
        },
        {
            lugar: 'Las Armas - Capilla Nuestra Señora de Luján',
            fecha: '',
            descripcion:
                'Compartimos la emotiva entronización de Carlo Acutis en Las Armas. La misa fue presidida por Monseñor José María Baliña.',
            imagenes: [
                '/img/entronizaciones/lasarmas1.jpg',
                '/img/entronizaciones/lasarmas2.jpg',
            ],
        },
        {
            lugar: 'Labardén - Parroquia Sagrado Corazón de Jesús',
            fecha: '16 de marzo 2025',
            descripcion:
                'Entronización de Carlo Acutis presidida por Monseñor José María Baliña, con un profundo espíritu de fe y emoción.',
            imagenes: [
                '/img/entronizaciones/labarden1.jpg',
                '/img/entronizaciones/labarden2.jpg',
            ],
        },
        {
            lugar: 'General Guido - Parroquia Nuestra Señora de la Merced',
            fecha: '16 de marzo 2025',
            descripcion:
                'La comunidad de General Guido recibió la imagen de Carlo Acutis con gran devoción. Presidida por Monseñor José María Baliña.',
            imagenes: [
                '/img/entronizaciones/guido1.jpg',
                '/img/entronizaciones/guido2.jpg',
            ],
        },
        {
            lugar: 'Castelli - Parroquia Santa Rosa de Lima',
            fecha: '16 de marzo 2025',
            descripcion:
                'Celebración de la entronización de Carlo Acutis en Castelli, presidida por el Padre Ezequiel. Incluyó el testimonio de Carlos Bonicalzi.',
            imagenes: [
                '/img/entronizaciones/castelli1.jpg',
                '/img/entronizaciones/castelli2.jpg',
            ],
        },
        {
            lugar: 'FIBRA TV - Chascomús',
            fecha: '10 de marzo 2025',
            descripcion:
                'Se entronizó la imagen de Carlo Acutis traída desde Asís, con bendición del Obispo Juan Ignacio Liebana y participación de Scouts y Bomberos.',
            imagen: '/img/entronizaciones/fibra-tv.jpg',
        },

        // JSONs (sin imagen/video)
        {
            lugar: 'Dolores - Merendero San Juan Bautista',
            fecha: '',
            descripcion:
                'Agradecimiento profundo por hacer posible esta hermosa entronización. Un momento de fe, amor y unión que quedará en el corazón de todos.',
        },
        {
            lugar: 'Roque Pérez - Iglesia de Roque Pérez',
            fecha: '',
            descripcion:
                'Momento inolvidable con la entronización del Beato Carlo Acutis. Una jornada cargada de fe y emoción.',
        },
        {
            lugar: 'Capital Federal - Iglesia del Santísimo Sacramento',
            fecha: '',
            descripcion:
                'La entronización de Carlo Acutis fue una ceremonia muy emotiva y emocionante. La misa estuvo a cargo del padre Rafael Emilio Caceres Olave.',
        },
        {
            lugar: 'Buenos Aires - UCA (Campus Puerto Madero)',
            fecha: '28 de abril',
            descripcion:
                'La UCA inauguró el Oratorio "Carlos Acutis" en el Edif. Santo Tomás Moro, con misa previa en la Iglesia del Corazón de Jesús.',
        },
        {
            lugar: 'Verónica - Iglesia de Lourdes',
            fecha: '7 de diciembre de 2024',
            descripcion:
                'Una celebración con fe, esperanza y gratitud. Participaron los bomberos y el grupo Scout de la ciudad.',
        },
    ];

    // Evitar lugares duplicados
    const lugaresUnicos = new Set();
    const entronizacionesUnicas = entronizaciones.filter((e) => {
        if (lugaresUnicos.has(e.lugar)) return false;
        lugaresUnicos.add(e.lugar);
        return true;
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-4xl text-red-700">
                Entronizaciones de Carlo Acutis
            </h1>
            <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
                {entronizacionesUnicas.map((ent, idx) => (
                    <div
                        key={idx}
                        className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col gap-4"
                    >
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {ent.lugar}
                            </h2>
                            {ent.fecha && (
                                <p className="text-gray-600 font-semibold">
                                    {ent.fecha}
                                </p>
                            )}
                        </div>
                        <p className="text-gray-700">{ent.descripcion}</p>

                        {ent.imagen ? (
                            <Image
                                src={ent.imagen}
                                width={220}
                                height={220}
                                alt={`Entronización en ${ent.lugar}`}
                                className="rounded-lg shadow"
                            />
                        ) : (
                            <div className="w-[220px] h-[220px] flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg shadow border border-gray-200">
                                <span className="text-center">
                                    Sin foto disponible
                                </span>
                            </div>
                        )}
                        {ent.imagenes && (
                            <div className="grid grid-cols-2 gap-4">
                                {ent.imagenes.map((src, i) => (
                                    <Image
                                        key={i}
                                        src={src}
                                        width={320}
                                        height={180}
                                        alt={`Entronización en ${ent.lugar} ${
                                            i + 1
                                        }`}
                                        className="rounded-lg shadow"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
