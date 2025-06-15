const HourOfCode = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        Cómo iniciar una hora del código en tu escuela o comunidad
      </h1>

      <img
        src="/img/hora-codigo.png"
        alt="Niño participando en la Hora del Código"
        className="rounded-lg shadow-md w-full max-h-64 object-cover"
      />

      <p className="text-gray-700 leading-relaxed">
        La Hora del Código es una excelente oportunidad para acercar a los niños al mundo de la programación. Aquí te damos los pasos:
      </p>

      <ol className="list-decimal list-inside text-gray-700 space-y-1">
        <li>
          Regístrate en{" "}
          <a
            href="https://hourofcode.com"
            className="text-indigo-600 underline"
            target="_blank"
          >
            hourofcode.com
          </a>
        </li>
        <li>Elige una plataforma (Code.org, Scratch, Tynker...)</li>
        <li>Reúne estudiantes, docentes o comunidad</li>
        <li>Usa materiales impresos o digitales</li>
        <li>Entrega diplomas o stickers de reconocimiento</li>
      </ol>

      <div className="bg-indigo-100 p-4 rounded-xl text-center">
        <p className="font-semibold text-indigo-800">
          ¡Organiza tu evento y comparte la magia del código con otros niños!
        </p>
      </div>
    </main>
  );
};

export default HourOfCode;
