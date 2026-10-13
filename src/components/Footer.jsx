import { Link } from "react-router-dom";
import { FaHatWizard } from "react-icons/fa";
import { articles } from "../data/articles";

export default function Footer() {
  const anio = new Date().getFullYear();
  const destacados = articles.slice(0, 5);

  return (
    <footer className="mt-16 border-t border-brand-100 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-700 font-display font-bold text-xl"
          >
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <FaHatWizard />
            </span>
            Codelandia
          </Link>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            Recursos y guías para que los niños aprendan a programar jugando,
            escritos para familias y docentes.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-brand-800 mb-3">
            Artículos
          </h3>
          <ul className="space-y-2 text-sm">
            {destacados.map((a) => (
              <li key={a.slug}>
                <Link
                  to={a.path}
                  className="text-slate-600 hover:text-brand-700"
                >
                  {a.cardTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-brand-800 mb-3">
            Codelandia
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-slate-600 hover:text-brand-700">
                Sobre Codelandia
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-slate-600 hover:text-brand-700"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-brand-800 mb-3">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="text-slate-600 hover:text-brand-700"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-slate-600 hover:text-brand-700">
                Términos de uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-slate-400">
          © {anio} Codelandia. Contenido educativo con fines informativos.
        </div>
      </div>
    </footer>
  );
}
