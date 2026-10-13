import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <Seo title="Página no encontrada" description="La página que buscas no existe." />
      <p className="font-display text-6xl font-bold text-brand-300">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-brand-800">
        No encontramos esta página
      </h1>
      <p className="mt-2 text-slate-600">
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
