const Top5Platforms = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        Top 5 plataformas para que los niños aprendan a programar jugando
      </h1>

      <img
        src="/img/plataformas.png"
        alt="Scratch en laptop"
        className="rounded-lg shadow-md w-full max-h-64 object-cover"
      />

      <p className="text-gray-700 leading-relaxed">
        Existen muchas plataformas, pero estas destacan por su enfoque en niños, seguridad y facilidad de uso:
      </p>

      <ol className="list-decimal list-inside text-gray-700 space-y-1">
        <li><strong>Scratch</strong> – Aprende con bloques visuales y personajes.</li>
        <li><strong>Code.org</strong> – Actividades desde preescolar hasta secundaria.</li>
        <li><strong>Tynker</strong> – Retos y juegos basados en programación real.</li>
        <li><strong>Kodable</strong> – Introducción divertida desde los 4 años.</li>
        <li><strong>Blockly Games</strong> – De Google para lógica avanzada.</li>
      </ol>

      <div className="bg-indigo-50 p-4 rounded-md border text-sm">
        <p>
          👉 Tip: Comienza con <strong>Scratch</strong> y luego explora otras según el interés del niño.
        </p>
      </div>
    </main>
  );
};

export default Top5Platforms;
