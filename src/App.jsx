import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Páginas generales
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Artículos
import WhyLearnToCode from './pages/articles/WhyLearnToCode';
import Top5Platforms from './pages/articles/Top5Platforms';
import ParentMistakes from './pages/articles/ParentMistakes';
import HourOfCode from './pages/articles/HourOfCode';
import BestLanguage from './pages/articles/BestLanguage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Rutas generales */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Rutas de artículos */}
        <Route path="/articulos/por-que-aprender" element={<WhyLearnToCode />} />
        <Route path="/articulos/plataformas-recomendadas" element={<Top5Platforms />} />
        <Route path="/articulos/errores-de-padres" element={<ParentMistakes />} />
        <Route path="/articulos/hora-del-codigo" element={<HourOfCode />} />
        <Route path="/articulos/mejor-lenguaje" element={<BestLanguage />} />
      </Routes>
    </>
  );
}

export default App;
