import { useEffect } from "react";

const SITE = "Codelandia";
const BASE_URL = "https://blog-codelandia-mu.vercel.app";

/**
 * SEO para una SPA de Vite (renderizado en cliente).
 *
 * Vite no tiene renderizado en servidor, así que el <title> y la
 * meta-descripción se ajustan en el cliente con este efecto. Googlebot ejecuta
 * JavaScript y lee estos valores tras renderizar, pero conviene que cada ruta
 * tenga título y descripción propios para los resultados de búsqueda y para
 * cuando se comparte el enlace.
 *
 * Mantiene una sola etiqueta de cada tipo: si no existe la crea, y al
 * desmontar restaura el título por defecto del sitio.
 */
export default function Seo({ title, description, path = "" }) {
  useEffect(() => {
    const tituloCompleto = title ? `${title} · ${SITE}` : SITE;
    document.title = tituloCompleto;

    const fijarMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    if (description) {
      fijarMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
      fijarMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
    }
    fijarMeta('meta[property="og:title"]', {
      property: "og:title",
      content: tituloCompleto,
    });

    // Canonical por ruta.
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${path}`);

    return () => {
      document.title = SITE;
    };
  }, [title, description, path]);

  return null;
}
