const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <section className="bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Contáctanos</h1>
        <p className="text-gray-700 mb-4">
          ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? Estamos felices de escucharte.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
