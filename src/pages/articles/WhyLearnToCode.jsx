const WhyLearnToCode = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        ¿Por qué los niños deberían aprender a programar desde pequeños?
      </h1>

      <img
        src="/img/aprender-programar.png"
        alt="Niño aprendiendo a programar"
        className="rounded-lg shadow-md w-full max-h-64 object-cover"
      />

      <p className="text-gray-700 leading-relaxed">
        En el mundo digital de hoy, saber programar es casi tan importante como saber leer y escribir.
        Pero, ¿es posible que los niños empiecen desde temprana edad? ¡Claro que sí!
      </p>

      <p className="text-gray-700 leading-relaxed">
        Aprender a programar desarrolla el pensamiento lógico, la creatividad y la capacidad para resolver problemas.
        Además, herramientas como{" "}
        <a className="text-indigo-600 underline" href="https://scratch.mit.edu" target="_blank">Scratch</a> o{" "}
        <a className="text-indigo-600 underline" href="https://code.org" target="_blank">Code.org</a> convierten la programación en una aventura divertida, con personajes animados y juegos.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Mejora la atención y concentración</li>
        <li>Fomenta el trabajo en equipo</li>
        <li>Prepara a los niños para el futuro digital</li>
      </ul>

      <div className="bg-indigo-100 p-4 rounded-xl text-center">
        <p className="font-semibold text-indigo-800">
          Explora más recursos y acompaña a tu hijo en este camino.
        </p>
      </div>
    </main>
  );
};

export default WhyLearnToCode;
