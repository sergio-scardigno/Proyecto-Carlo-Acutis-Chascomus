import Image from 'next/image';

export default function Entronizaciones() {
    // Puedes reemplazar estos datos con los reales
    const entronizaciones = [
        {
            lugar: 'Dolores - Merendero San Juan Bautista',
            fecha: '', // No se especifica en el documento
            descripcion:
                'Desde el corazón, queremos expresar un profundo agradecimiento a cada uno de ustedes por hacer posible la hermosa entronización que vivimos juntos. Fue un momento de fe, amor y unión que quedará grabado en nuestros corazones.',
        },
        {
            lugar: 'Roque Pérez - Iglesia de Roque Pérez',
            fecha: '', // No se especifica una fecha exacta
            descripcion:
                'La comunidad vivió un momento inolvidable con la entronización de la imagen del Beato Carlo Acutis. Fue una jornada cargada de fe, emoción y profunda espiritualidad que tocó los corazones de niños, jóvenes y adultos.',
        },
        {
            lugar: 'Capital Federal - Iglesia del Santísimo Sacramento',
            fecha: '', // No se especifica en el documento
            descripcion:
                'Fue entronizada la imagen de Carlo Acutis en una ceremonia muy emotiva y emocionante. La misa estuvo a cargo del padre Rafael Emilio Caceres Olave.',
        },
        {
            lugar: 'Buenos Aires - UCA (Campus Puerto Madero)',
            fecha: '28 de abril', // Fecha proporcionada en el texto
            descripcion:
                'El Instituto de Espiritualidad y Acción Pastoral de la UCA inauguró el Oratorio “Carlos Acutis” con una misa en la Iglesia del Corazón de Jesús. El oratorio está ubicado en el Edif. Santo Tomás Moro.',
        },
        {
            lugar: 'Verónica - Iglesia de Lourdes',
            fecha: '7 de diciembre de 2024',
            descripcion:
                'La entronización de Carlo Acutis reunió a la comunidad en un ambiente de fe, esperanza y gratitud. La ceremonia reafirmó la fe en el ejemplo del joven beato y contó con la colaboración del cuerpo de bomberos y el grupo Scout local.',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 hero">
            <h1 className="mb-8 font-semibold text-center font-zapfino text-4xl text-red-700">
                Entronizaciones de Carlo Acutis
            </h1>
            <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
                {entronizaciones.map((ent, idx) => (
                    <div
                        key={idx}
                        className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col md:flex-row items-center gap-6"
                    >
                        {ent.imagen && (
                            <Image
                                src={ent.imagen}
                                width={220}
                                height={220}
                                alt={`Entronización en ${ent.lugar}`}
                                className="rounded-lg shadow"
                            />
                        )}
                        <div className="flex-1">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">
                                {ent.lugar}
                            </h2>
                            <p className="text-gray-600 mb-1 font-semibold">
                                {ent.fecha}
                            </p>
                            <p className="mb-4 text-gray-700">
                                {ent.descripcion}
                            </p>
                            {ent.video && (
                                <div className="w-full aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full h-56 md:h-64"
                                        src={ent.video}
                                        title={`Video entronización en ${ent.lugar}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
