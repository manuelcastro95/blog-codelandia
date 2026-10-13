import Seo from "../components/Seo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Seo
        title="Sobre Codelandia"
        description="Codelandia es un blog con guías prácticas para que familias y docentes acompañen a los niños en su primer contacto con la programación."
        path="/about"
      />

      <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mb-6">
        Sobre Codelandia
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed text-[1.05rem]">
        <p>
          <strong>Codelandia</strong> es un blog pensado para las personas que
          acompañan a un niño en su primer contacto con la programación: madres,
          padres, abuelos y docentes que quieren ayudar, aunque ellos mismos no
          sepan programar.
        </p>
        <p>
          Creemos que aprender a programar en la infancia no busca formar
          ingenieros, sino entrenar una forma de pensar: ordenada, creativa y
          capaz de resolver problemas sin frustrarse. Y creemos que eso se logra
          mejor jugando que estudiando.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-700 pt-4">
          Qué encontrarás aquí
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2">
          <li>Guías paso a paso para empezar sin conocimientos previos.</li>
          <li>
            Comparativas honestas de plataformas y herramientas, casi todas
            gratuitas.
          </li>
          <li>
            Actividades para hacer con y sin pantalla, adaptadas a cada edad.
          </li>
          <li>
            Consejos para acompañar sin presionar y mantener viva la curiosidad.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-brand-700 pt-4">
          Cómo escribimos
        </h2>
        <p>
          Nuestro contenido es original y está pensado para ser útil de verdad,
          no para rellenar. Recomendamos herramientas por su valor educativo, sin
          patrocinios que condicionen lo que decimos. Cuando mencionamos una
          plataforma externa, enlazamos a su web oficial para que puedas
          comprobarlo tú mismo.
        </p>
        <p>
          Codelandia es un proyecto editorial con fines informativos y
          educativos. ¿Tienes una sugerencia o quieres proponer un tema?{" "}
          <Link to="/contact" className="text-brand-600 underline">
            Escríbenos
          </Link>
          , leemos todos los mensajes.
        </p>
      </div>
    </main>
  );
};

export default About;
