const About = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <section className="bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-6">
          ¿Qué es Codelandia?
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Codelandia</strong> es una iniciativa educativa diseñada para que niños y niñas descubran la magia de la programación desde temprana edad. A través de actividades lúdicas, cuentos interactivos, juegos y plataformas educativas seguras, fomentamos el pensamiento lógico, la creatividad y el trabajo en equipo.
        </p>

        <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">¿Por qué Codelandia?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Aprender jugando</li>
            <li>Explorar tecnología desde la imaginación</li>
            <li>Plataformas recomendadas y seguras</li>
            <li>Acompañamiento docente y familiar</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
