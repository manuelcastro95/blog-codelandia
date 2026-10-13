import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { articles } from "../data/articles";

/** Color de la insignia según la categoría del artículo. */
const COLOR_CATEGORIA = {
  "Primeros pasos": "bg-brand-100 text-brand-700",
  Conceptos: "bg-violet-100 text-violet-700",
  Herramientas: "bg-mint-400/20 text-emerald-700",
  "Para familias": "bg-sun-400/20 text-amber-700",
};

const Home = () => {
  const destacado = articles[0];
  const resto = articles.slice(1);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Seo
        title="Programación para niños, explicada para familias y docentes"
        description="Guías prácticas para enseñar programación a niños: por qué aprender a programar, plataformas como Scratch y Code.org, pensamiento computacional y errores a evitar en casa."
        path="/"
      />

      {/* Hero */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
          Programar jugando
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-800 leading-tight">
          Enseña a tus hijos a programar, sin ser experto
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Guías claras y actividades divertidas para que niños de 5 a 12 años
          descubran la programación. Escrito para familias y docentes, paso a
          paso y sin tecnicismos.
        </p>
      </section>

      {/* Artículo destacado */}
      <section className="mb-12">
        <Link
          to={destacado.path}
          className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-brand-100 transition-all"
        >
          <div className="overflow-hidden">
            <img
              src={destacado.image}
              alt={destacado.title}
              className="w-full h-full min-h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
          <div className="p-7 flex flex-col justify-center">
            <span
              className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                COLOR_CATEGORIA[destacado.category] || "bg-brand-100 text-brand-700"
              }`}
            >
              {destacado.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-800 group-hover:text-brand-600">
              {destacado.title}
            </h2>
            <p className="mt-2 text-slate-600">{destacado.description}</p>
            <span className="mt-4 font-semibold text-brand-600">
              Leer artículo →
            </span>
          </div>
        </Link>
      </section>

      {/* Rejilla de artículos */}
      <section>
        <h2 className="font-display text-2xl font-bold text-brand-800 mb-6">
          Todos los artículos
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resto.map((a) => (
            <Link
              key={a.slug}
              to={a.path}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-brand-100 transition-all flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-44 object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span
                  className={`self-start px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                    COLOR_CATEGORIA[a.category] || "bg-brand-100 text-brand-700"
                  }`}
                >
                  {a.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-800 group-hover:text-brand-600">
                  {a.cardTitle}
                </h3>
                <p className="mt-1 text-sm text-slate-600 flex-1">
                  {a.description}
                </p>
                <span className="mt-3 text-sm text-slate-400">
                  {a.readMinutes} min de lectura
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
