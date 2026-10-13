import Seo from "../components/Seo";
import { site } from "../data/site";

const H2 = ({ children }) => (
  <h2 className="font-display text-2xl font-bold text-brand-700 pt-6">
    {children}
  </h2>
);

const Terms = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Seo
        title="Términos de uso"
        description="Condiciones de uso del contenido educativo de Codelandia, propiedad intelectual, enlaces externos y limitación de responsabilidad."
        path="/terms"
      />

      <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-800">
        Términos de uso
      </h1>
      <p className="text-sm text-slate-400 mt-2">
        Última actualización: junio de 2025
      </p>

      <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem] mt-4">
        <p>
          Al acceder y utilizar <strong>{site.name}</strong> aceptas estos
          términos. Si no estás de acuerdo con ellos, te pedimos que no uses el
          sitio.
        </p>

        <H2>1. Objeto del sitio</H2>
        <p>
          Codelandia es un blog educativo con artículos y guías sobre cómo
          acompañar a los niños en el aprendizaje de la programación. Su finalidad
          es exclusivamente informativa y divulgativa.
        </p>

        <H2>2. Uso del contenido</H2>
        <p>
          Puedes leer, compartir enlaces y usar nuestras guías para uso personal o
          en el aula. No está permitido copiar y republicar nuestros artículos
          como propios ni usarlos con fines comerciales sin autorización.
        </p>

        <H2>3. Propiedad intelectual</H2>
        <p>
          Los textos originales de Codelandia pertenecen a sus autores. Las marcas,
          nombres y logotipos de terceros que se mencionan (como Scratch, Code.org
          o Python) pertenecen a sus respectivos titulares y se citan solo con
          fines informativos.
        </p>

        <H2>4. Enlaces a terceros</H2>
        <p>
          Recomendamos plataformas y recursos externos que consideramos útiles,
          pero no controlamos su contenido ni sus condiciones. El acceso a esos
          sitios es responsabilidad del usuario, que debe revisar sus propios
          términos y políticas.
        </p>

        <H2>5. Uso por menores</H2>
        <p>
          El sitio está pensado para ser utilizado por niños con el acompañamiento
          de un adulto responsable. Las actividades sugeridas deben realizarse bajo
          supervisión, especialmente cuando implican el uso de internet o de
          plataformas externas.
        </p>

        <H2>6. Limitación de responsabilidad</H2>
        <p>
          El contenido se ofrece «tal cual», con fines educativos. Procuramos que
          la información sea correcta y esté actualizada, pero no garantizamos que
          esté libre de errores. Codelandia no se responsabiliza de las decisiones
          que se tomen a partir de la información publicada.
        </p>

        <H2>7. Publicidad</H2>
        <p>
          El sitio puede mostrar publicidad de terceros para sostener su
          funcionamiento. El tratamiento de datos relacionado con los anuncios se
          describe en nuestra política de privacidad.
        </p>

        <H2>8. Contacto</H2>
        <p>
          Para cualquier duda sobre estos términos, escríbenos a{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-brand-600 underline font-semibold"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default Terms;
