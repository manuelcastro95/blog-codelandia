import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * En una SPA la posición de scroll no se reinicia al cambiar de ruta. Este
 * componente lleva la vista al inicio cada vez que cambia la URL, para que al
 * abrir un artículo se empiece por el principio y no a media página.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
