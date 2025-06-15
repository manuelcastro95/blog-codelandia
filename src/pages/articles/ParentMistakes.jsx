const ParentMistakes = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        Errores comunes que cometen los padres al enseñar programación
      </h1>

      <img
        src="/img/errores-padres.png"
        alt="Padre enseñando programación a su hija"
        className="rounded-lg shadow-md w-full max-h-64 object-cover"
      />

      <p className="text-gray-700 leading-relaxed">
        Enseñar programación en casa puede ser una experiencia enriquecedora, pero hay errores frecuentes que se deben evitar:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Forzar el aprendizaje como si fuera una obligación</li>
        <li>No participar activamente o acompañar</li>
        <li>Usar plataformas no adecuadas para su edad</li>
        <li>No celebrar sus pequeños logros</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <p className="text-yellow-800 font-medium">
          Consejo: La programación debe ser divertida y compartida. Jugar juntos es el mejor aprendizaje.
        </p>
      </div>
    </main>
  );
};

export default ParentMistakes;
