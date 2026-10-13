import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Páginas generales
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Artículos
import PorQueAprender from "./pages/articles/PorQueAprender";
import PensamientoComputacional from "./pages/articles/PensamientoComputacional";
import MejorLenguaje from "./pages/articles/MejorLenguaje";
import PlataformasRecomendadas from "./pages/articles/PlataformasRecomendadas";
import ScratchDesdeCero from "./pages/articles/ScratchDesdeCero";
import EdadesYEtapas from "./pages/articles/EdadesYEtapas";
import ErroresDePadres from "./pages/articles/ErroresDePadres";
import RoboticaSinPantalla from "./pages/articles/RoboticaSinPantalla";
import HoraDelCodigo from "./pages/articles/HoraDelCodigo";
import TiempoDePantalla from "./pages/articles/TiempoDePantalla";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Routes>
          {/* Rutas generales */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Rutas de artículos */}
          <Route path="/articulos/por-que-aprender" element={<PorQueAprender />} />
          <Route
            path="/articulos/pensamiento-computacional"
            element={<PensamientoComputacional />}
          />
          <Route path="/articulos/mejor-lenguaje" element={<MejorLenguaje />} />
          <Route
            path="/articulos/plataformas-recomendadas"
            element={<PlataformasRecomendadas />}
          />
          <Route
            path="/articulos/scratch-desde-cero"
            element={<ScratchDesdeCero />}
          />
          <Route path="/articulos/edades-y-etapas" element={<EdadesYEtapas />} />
          <Route
            path="/articulos/errores-de-padres"
            element={<ErroresDePadres />}
          />
          <Route
            path="/articulos/robotica-sin-pantalla"
            element={<RoboticaSinPantalla />}
          />
          <Route path="/articulos/hora-del-codigo" element={<HoraDelCodigo />} />
          <Route
            path="/articulos/tiempo-de-pantalla"
            element={<TiempoDePantalla />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
