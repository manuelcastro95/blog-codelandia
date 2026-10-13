import { useState } from "react";
import Seo from "../components/Seo";
import { site } from "../data/site";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // El formulario abre el cliente de correo del propio usuario con un mensaje
  // ya redactado. No hay servidor que reciba datos: nada se almacena en este
  // sitio, lo que además simplifica la privacidad de los menores.
  const enviar = (e) => {
    e.preventDefault();
    const asunto = encodeURIComponent(`Mensaje desde Codelandia · ${nombre}`);
    const cuerpo = encodeURIComponent(
      `${mensaje}\n\n—\nNombre: ${nombre}\nCorreo: ${correo}`,
    );
    window.location.href = `mailto:${site.email}?subject=${asunto}&body=${cuerpo}`;
  };

  const input =
    "w-full px-4 py-2.5 border border-brand-100 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-300";

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <Seo
        title="Contacto"
        description="Escríbenos para sugerir un tema, reportar un error o proponer una colaboración. Leemos todos los mensajes."
        path="/contact"
      />

      <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mb-3">
        Contacto
      </h1>
      <p className="text-gray-700 mb-6 text-[1.05rem]">
        ¿Tienes una sugerencia, encontraste un error o quieres proponer un tema o
        colaboración? Nos encanta recibir mensajes. Puedes escribirnos
        directamente a{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-brand-600 underline font-semibold"
        >
          {site.email}
        </a>{" "}
        o usar este formulario.
      </p>

      <form onSubmit={enviar} className="space-y-4 bg-white/70 border border-brand-100 rounded-2xl p-6">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Nombre
          </label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Tu correo
          </label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Mensaje
          </label>
          <textarea
            required
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className={input}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
        >
          Enviar mensaje
        </button>
        <p className="text-xs text-slate-400">
          Al enviar se abrirá tu aplicación de correo con el mensaje listo. No
          guardamos tus datos en este sitio.
        </p>
      </form>
    </main>
  );
};

export default Contact;
