/**
 * Fuente única de verdad de los artículos del blog.
 *
 * Este archivo contiene SOLO metadatos (no componentes), para que puedan
 * importarlo el menú, la portada, el sitemap y el propio layout de artículo sin
 * crear dependencias circulares. El cuerpo de cada artículo vive en
 * src/pages/articles/<Componente>.jsx y se enlaza con las rutas en App.jsx.
 *
 * Para añadir un artículo nuevo:
 *   1. Añade su entrada aquí.
 *   2. Crea el componente en src/pages/articles/ usando <ArticleLayout slug="...">.
 *   3. Registra la ruta en App.jsx.
 * La portada, el menú y el sitemap se actualizan solos a partir de esta lista.
 */

export const SITE_URL = "https://blog-codelandia-mu.vercel.app";

export const articles = [
  {
    slug: "por-que-aprender",
    path: "/articulos/por-que-aprender",
    cardTitle: "¿Por qué aprender a programar?",
    title: "¿Por qué los niños deberían aprender a programar desde pequeños?",
    description:
      "Programar no es solo escribir código: desarrolla el pensamiento lógico, la paciencia y la creatividad. Te explicamos qué gana un niño que aprende a programar y cómo empezar sin presión.",
    category: "Primeros pasos",
    date: "2025-05-20",
    readMinutes: 6,
  },
  {
    slug: "pensamiento-computacional",
    path: "/articulos/pensamiento-computacional",
    cardTitle: "¿Qué es el pensamiento computacional?",
    title: "Qué es el pensamiento computacional y por qué es clave para los niños",
    description:
      "Descomponer, buscar patrones, abstraer y crear algoritmos: las cuatro habilidades del pensamiento computacional, explicadas con ejemplos cotidianos que puedes practicar sin computadora.",
    category: "Conceptos",
    date: "2025-05-22",
    readMinutes: 7,
  },
  {
    slug: "mejor-lenguaje",
    path: "/articulos/mejor-lenguaje",
    cardTitle: "¿Cuál es el mejor lenguaje para empezar?",
    title: "¿Cuál es el mejor lenguaje de programación para que un niño empiece?",
    description:
      "Scratch, Blockly, Python o JavaScript: cuál conviene según la edad y qué buscar en un primer lenguaje. Una guía para elegir sin dejarse llevar por modas.",
    category: "Primeros pasos",
    date: "2025-05-24",
    readMinutes: 7,
  },
  {
    slug: "plataformas-recomendadas",
    path: "/articulos/plataformas-recomendadas",
    cardTitle: "Plataformas recomendadas",
    title: "Las mejores plataformas para que los niños aprendan a programar",
    description:
      "Scratch, Code.org, Blockly Games, Tynker y más: qué ofrece cada plataforma, para qué edad sirve y cuáles son gratuitas. Comparativa honesta para familias y docentes.",
    category: "Herramientas",
    date: "2025-05-26",
    readMinutes: 8,
  },
  {
    slug: "scratch-desde-cero",
    path: "/articulos/scratch-desde-cero",
    cardTitle: "Scratch desde cero: tu primer proyecto",
    title: "Scratch desde cero: cómo hacer tu primer proyecto paso a paso",
    description:
      "Una guía práctica para crear el primer juego en Scratch con un niño: desde abrir el editor hasta hacer que un personaje se mueva, hable y gane puntos. Sin conocimientos previos.",
    category: "Herramientas",
    date: "2025-05-28",
    readMinutes: 8,
  },
  {
    slug: "edades-y-etapas",
    path: "/articulos/edades-y-etapas",
    cardTitle: "Qué enseñar según la edad",
    title: "Qué enseñar según la edad: una guía de programación de los 5 a los 12 años",
    description:
      "Lo que funciona a los 5 años aburre a los 11. Esta guía por etapas explica qué conceptos y herramientas encajan en cada edad, de los bloques sin lectura al primer código escrito.",
    category: "Para familias",
    date: "2025-05-30",
    readMinutes: 7,
  },
  {
    slug: "errores-de-padres",
    path: "/articulos/errores-de-padres",
    cardTitle: "Errores comunes de los padres",
    title: "Errores comunes al enseñar programación en casa (y cómo evitarlos)",
    description:
      "Convertirlo en obligación, resolverle todo, obsesionarse con el lenguaje de moda: los errores más frecuentes al enseñar a programar en casa y qué hacer en su lugar.",
    category: "Para familias",
    date: "2025-06-01",
    readMinutes: 6,
  },
  {
    slug: "robotica-sin-pantalla",
    path: "/articulos/robotica-sin-pantalla",
    cardTitle: "Programar sin pantalla",
    title: "Robótica y juegos para aprender a programar sin pantalla",
    description:
      "Se puede enseñar la lógica de la programación con cartas, juguetes y juegos de mesa, sin encender una pantalla. Ideas de programación 'desenchufada' para los más pequeños.",
    category: "Para familias",
    date: "2025-06-03",
    readMinutes: 6,
  },
  {
    slug: "hora-del-codigo",
    path: "/articulos/hora-del-codigo",
    cardTitle: "Cómo organizar una Hora del Código",
    title: "Cómo organizar una Hora del Código en casa o en el aula",
    description:
      "La Hora del Código es una actividad de 60 minutos para iniciarse en la programación. Te contamos cómo prepararla, qué actividades elegir y cómo mantener la motivación.",
    category: "Herramientas",
    date: "2025-06-05",
    readMinutes: 6,
  },
  {
    slug: "tiempo-de-pantalla",
    path: "/articulos/tiempo-de-pantalla",
    cardTitle: "Programar y tiempo de pantalla",
    title: "Programar y tiempo de pantalla: cómo encontrar el equilibrio",
    description:
      "No todo el tiempo frente a la pantalla es igual. Diferenciamos el consumo pasivo de la creación activa y damos pautas para que programar sume sin descuidar el equilibrio.",
    category: "Para familias",
    date: "2025-06-07",
    readMinutes: 6,
  },
];

// Cada artículo tiene su propia imagen en /img, nombrada igual que su slug.
// Derivarla aquí garantiza que nunca se repita ni se desincronice.
articles.forEach((a) => {
  a.image = `/img/${a.slug}.webp`;
});

/** Devuelve los metadatos de un artículo por su slug. */
export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

/** Otros artículos de la misma categoría, para la sección "Sigue leyendo". */
export function getRelated(slug, limit = 3) {
  const actual = getArticle(slug);
  if (!actual) return articles.slice(0, limit);
  const mismaCategoria = articles.filter(
    (a) => a.slug !== slug && a.category === actual.category,
  );
  const resto = articles.filter(
    (a) => a.slug !== slug && a.category !== actual.category,
  );
  return [...mismaCategoria, ...resto].slice(0, limit);
}
