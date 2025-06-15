import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
          ¡Bienvenidos a Codelandia!
        </h1>
        <p className="text-gray-700 text-lg">
          Recursos divertidos para que los más pequeños aprendan a programar jugando.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            path: "/articulos/por-que-aprender",
            title: "¿Por qué aprender a programar?",
            image: "/img/aprender-programar.png",
            description: "Descubre los beneficios de la programación para niños desde una edad temprana.",
          },
          {
            path: "/articulos/plataformas-recomendadas",
            title: "Top 5 plataformas recomendadas",
            image: "/img/plataformas.png",
            description: "Las mejores herramientas online para que los niños empiecen a programar.",
          },
          {
            path: "/articulos/errores-de-padres",
            title: "Errores comunes de los padres",
            image: "/img/errores-padres.png",
            description: "Evita estos errores frecuentes al enseñar programación en casa.",
          },
          {
            path: "/articulos/hora-del-codigo",
            title: "Cómo hacer una hora del código",
            image: "/img/hora-codigo.png",
            description: "Organiza un evento divertido y educativo para niños en tu comunidad.",
          },
          {
            path: "/articulos/pensamiento-computacional",
            title: "¿Qué es el pensamiento computacional y por qué es clave para los niños?",
            image: "/img/pensamiento-computacional.png",
            description: "El pensamiento computacional es la habilidad de resolver problemas utilizando conceptos similares a los que emplea una computadora.",
          },
        ].map((article) => (
          <Link
            key={article.path}
            to={article.path}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-indigo-700">{article.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{article.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;
