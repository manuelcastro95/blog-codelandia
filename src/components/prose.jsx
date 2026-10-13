/**
 * Bloques de contenido reutilizables para el cuerpo de los artículos.
 * Centralizan los estilos (Tailwind) para que cada artículo se lea como prosa
 * y no como una maraña de clases repetidas.
 */

export function H2({ children }) {
  return (
    <h2 className="text-2xl font-bold text-indigo-700 mt-8 mb-1">{children}</h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-1">
      {children}
    </h3>
  );
}

export function Lead({ children }) {
  return <p className="text-lg text-gray-800 leading-relaxed">{children}</p>;
}

export function A({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 underline hover:text-indigo-800"
    >
      {children}
    </a>
  );
}

export function UL({ children }) {
  return (
    <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
      {children}
    </ul>
  );
}

export function OL({ children }) {
  return (
    <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
      {children}
    </ol>
  );
}

/** Caja destacada para consejos o advertencias. */
export function Callout({ title, children }) {
  return (
    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 my-2">
      {title && (
        <p className="font-semibold text-indigo-800 mb-1">{title}</p>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
