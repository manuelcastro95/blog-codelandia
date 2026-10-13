import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaHatWizard } from "react-icons/fa";
import { articles } from "../data/articles";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const isActive = (path) => pathname === path;

  const linkBase = "font-semibold px-3 py-2 rounded-xl transition-colors";
  const linkClass = (path) =>
    `${linkBase} ${
      isActive(path)
        ? "bg-brand-100 text-brand-800"
        : "text-brand-700 hover:bg-brand-50 hover:text-brand-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-brand-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-700 font-display font-bold text-2xl hover:text-brand-900"
          onClick={() => setOpenMobile(false)}
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
            <FaHatWizard className="text-lg" />
          </span>
          Codelandia
        </Link>

        {/* Botón móvil */}
        <button
          className="sm:hidden text-brand-700 p-2 rounded-lg hover:bg-brand-50"
          onClick={() => setOpenMobile((v) => !v)}
          aria-label="Abrir menú"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </div>
        </button>

        {/* Links escritorio */}
        <div className="hidden sm:flex items-center gap-1 relative">
          <Link to="/about" className={linkClass("/about")}>
            Sobre Codelandia
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenDropdown((v) => !v)}
              onBlur={() => setTimeout(() => setOpenDropdown(false), 150)}
              className={`${linkBase} text-brand-700 hover:bg-brand-50 hover:text-brand-900`}
            >
              Artículos {openDropdown ? "▲" : "▼"}
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-[300px] bg-white shadow-xl rounded-2xl border border-brand-100 p-2 z-50 max-h-[70vh] overflow-auto">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    to={a.path}
                    className="block px-3 py-2 text-sm text-slate-700 rounded-lg hover:bg-brand-50 hover:text-brand-800"
                    onMouseDown={() => setOpenDropdown(false)}
                  >
                    {a.cardTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={linkClass("/contact")}>
            Contacto
          </Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {openMobile && (
        <div className="sm:hidden border-t border-brand-100 bg-white px-4 py-3 space-y-1">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-lg text-brand-700 hover:bg-brand-50"
            onClick={() => setOpenMobile(false)}
          >
            Sobre Codelandia
          </Link>
          <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase text-brand-400">
            Artículos
          </p>
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={a.path}
              className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-brand-50"
              onClick={() => setOpenMobile(false)}
            >
              {a.cardTitle}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-lg text-brand-700 hover:bg-brand-50"
            onClick={() => setOpenMobile(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
