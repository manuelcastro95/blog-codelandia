import { Link } from "react-router-dom";
import Seo from "./Seo";
import { getArticle, getRelated } from "../data/articles";

/**
 * Envoltura común de todos los artículos.
 *
 * Toma los metadatos del artículo de src/data/articles.js a partir del `slug`,
 * por lo que cada componente de artículo solo aporta el cuerpo (children).
 * Así el título, la imagen, la fecha, el SEO y la sección "Sigue leyendo" son
 * consistentes en todo el blog y se mantienen en un único sitio.
 */
export default function ArticleLayout({ slug, children }) {
  const meta = getArticle(slug);
  const relacionados = getRelated(slug);

  if (!meta) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700">Artículo no encontrado.</p>
        <Link to="/" className="text-indigo-600 underline">
          Volver al inicio
        </Link>
      </main>
    );
  }

  const fecha = new Date(meta.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={meta.path} />

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Migas de pan */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:text-indigo-700">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{meta.cardTitle}</span>
        </nav>

        <header className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {meta.category}
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold text-indigo-700">
            {meta.title}
          </h1>
          <p className="mt-3 text-gray-500 text-sm">
            Publicado el {fecha} · {meta.readMinutes} min de lectura
          </p>
        </header>

        <img
          src={meta.image}
          alt={meta.title}
          className="rounded-xl shadow-md w-full max-h-72 object-cover mb-8"
        />

        {/* Cuerpo del artículo */}
        <div className="article-body space-y-5 text-gray-700 leading-relaxed">
          {children}
        </div>

        {/* Sigue leyendo */}
        {relacionados.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-indigo-700 mb-4">
              Sigue leyendo
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relacionados.map((a) => (
                <Link
                  key={a.slug}
                  to={a.path}
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-4"
                >
                  <span className="text-xs font-semibold uppercase text-indigo-400">
                    {a.category}
                  </span>
                  <span className="mt-1 block font-semibold text-indigo-700">
                    {a.cardTitle}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link to="/" className="text-indigo-600 font-medium hover:underline">
            ← Volver a todos los artículos
          </Link>
        </div>
      </article>
    </>
  );
}
