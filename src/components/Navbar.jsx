import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaHatWizard } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="bg-indigo-50 border-b border-indigo-200 z-50 relative">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-700 font-extrabold text-xl hover:text-indigo-900"
        >
          <FaHatWizard className="text-indigo-500 text-2xl" />
          Codelandia
        </Link>

        {/* Links */}
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-4 items-center relative">
          <Link
            to="/about"
            className={`font-medium px-3 py-2 rounded-md ${
              isActive("/about")
                ? "bg-indigo-100 text-indigo-800"
                : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"
            }`}
          >
            Sobre Codelandia
          </Link>

          <Link
            to="/contact"
            className={`font-medium px-3 py-2 rounded-md ${
              isActive("/contact")
                ? "bg-indigo-100 text-indigo-800"
                : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"
            }`}
          >
            Contacto
          </Link>

          {/* Dropdown por clic */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-medium px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 transition"
            >
              Artículos {openDropdown ? "▲" : "▼"}
            </button>

            {openDropdown && (
              <div className="absolute left-0 mt-2 w-[260px] bg-white shadow-lg rounded-md border z-50 flex flex-col">
                <Link
                  to="/articulos/por-que-aprender"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  ¿Por qué aprender a programar?
                </Link>
                <Link
                  to="/articulos/plataformas-recomendadas"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Plataformas recomendadas
                </Link>
                <Link
                  to="/articulos/errores-de-padres"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Errores de los padres
                </Link>
                <Link
                  to="/articulos/hora-del-codigo"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Hora del Código
                </Link>
                <Link
                  to="/articulos/mejor-lenguaje"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Mejor lenguaje para niños
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/privacy-policy"
            className={`font-medium px-3 py-2 rounded-md ${
              isActive("/privacy-policy")
                ? "bg-indigo-100 text-indigo-800"
                : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"
            }`}
          >
            Privacidad
          </Link>

          <Link
            to="/terms"
            className={`font-medium px-3 py-2 rounded-md ${
              isActive("/terms")
                ? "bg-indigo-100 text-indigo-800"
                : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"
            }`}
          >
            Términos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
