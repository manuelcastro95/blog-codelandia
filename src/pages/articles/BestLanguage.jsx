const BestLanguage = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        ¿Qué lenguaje de programación es ideal para los niños?
      </h1>

      <img
        src="/img/lenguajes-programacion-ninos.png"
        alt="Lenguajes de programación para niños"
        className="rounded-lg shadow-md w-full max-h-64 object-cover"
      />

      <p className="text-gray-700 leading-relaxed">
        ¿Python? ¿JavaScript? ¿Scratch? Elegir un lenguaje puede ser confuso si no sabes por dónde empezar.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>3-6 años:</strong> Juegos visuales como Lightbot y Kodable</li>
        <li><strong>7-12 años:</strong> Scratch, Blockly</li>
        <li><strong>+12 años:</strong> Python, HTML/CSS, JavaScript</li>
      </ul>

      <p className="text-gray-700 leading-relaxed">
        <strong>Scratch</strong> es excelente porque permite aprender lógica sin escribir código.
        Además, los niños pueden crear historias, juegos y animaciones de forma intuitiva.
      </p>

      <div className="bg-indigo-100 p-4 rounded-xl text-center">
        <p className="font-semibold text-indigo-800">
          Lo importante no es el lenguaje, sino despertar la curiosidad y la creatividad. ¡Anímalos a explorar!
        </p>
      </div>
    </main>
  );
};

export default BestLanguage;
