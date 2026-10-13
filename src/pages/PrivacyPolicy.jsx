import Seo from "../components/Seo";
import { site } from "../data/site";

const H2 = ({ children }) => (
  <h2 className="font-display text-2xl font-bold text-brand-700 pt-6">
    {children}
  </h2>
);

const PrivacyPolicy = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Seo
        title="Política de privacidad"
        description="Cómo trata Codelandia los datos, las cookies y la publicidad de terceros como Google AdSense y la cookie DART, y cómo ejercer tus derechos."
        path="/privacy-policy"
      />

      <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-800">
        Política de privacidad
      </h1>
      <p className="text-sm text-slate-400 mt-2">
        Última actualización: junio de 2025
      </p>

      <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem] mt-4">
        <p>
          En <strong>{site.name}</strong> respetamos tu privacidad y la de los
          menores que usan este sitio con acompañamiento de un adulto. Esta
          política explica qué información se trata cuando visitas el blog y qué
          opciones tienes. Al usar el sitio aceptas lo aquí descrito.
        </p>

        <H2>1. Qué información tratamos</H2>
        <p>
          Codelandia es un blog de lectura. No pedimos registro ni creamos
          cuentas, y no solicitamos datos personales para leer los artículos.
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2">
          <li>
            <strong>Datos que nos envías tú:</strong> si usas el formulario de
            contacto, este abre tu propia aplicación de correo; el mensaje viaja
            de tu cuenta a la nuestra y no se almacena en un servidor de este
            sitio.
          </li>
          <li>
            <strong>Datos técnicos de navegación:</strong> como la mayoría de
            sitios, nuestros proveedores pueden registrar de forma agregada datos
            como el tipo de navegador o las páginas visitadas, con fines de
            medición y seguridad.
          </li>
        </ul>

        <H2>2. Cookies</H2>
        <p>
          Una cookie es un archivo pequeño que un sitio guarda en tu navegador.
          En Codelandia pueden usarse:
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2">
          <li>
            <strong>Cookies técnicas y de medición:</strong> para que el sitio
            funcione y para entender de forma agregada qué contenidos son útiles.
          </li>
          <li>
            <strong>Cookies de publicidad de terceros:</strong> gestionadas por
            las redes de anuncios descritas abajo.
          </li>
        </ul>
        <p>
          Puedes borrar o bloquear las cookies desde la configuración de tu
          navegador. Bloquear las de publicidad no afecta a la lectura de los
          artículos.
        </p>

        <H2>3. Publicidad de terceros y cookie DART de Google</H2>
        <p>
          Este sitio puede financiarse con publicidad. Para mostrarla trabajamos
          con redes de anuncios externas, entre ellas <strong>Google AdSense</strong>.
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2">
          <li>
            Google, como proveedor externo, utiliza cookies para publicar
            anuncios en este sitio.
          </li>
          <li>
            El uso de la <strong>cookie DART</strong> de Google permite publicar
            anuncios a los usuarios basándose en sus visitas a este y otros
            sitios de internet.
          </li>
          <li>
            Los proveedores externos pueden usar cookies e identificadores para
            medir el rendimiento de los anuncios. Esas cookies las fijan y
            controlan los terceros; nosotros no tenemos acceso a ellas.
          </li>
        </ul>
        <p>
          Puedes inhabilitar la publicidad personalizada visitando la{" "}
          <a
            className="text-brand-600 underline"
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configuración de anuncios de Google
          </a>
          . También puedes consultar cómo Google usa los datos en{" "}
          <a
            className="text-brand-600 underline"
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>

        <H2>4. Privacidad de los menores</H2>
        <p>
          Codelandia está dirigido a adultos (familias y docentes) que acompañan
          a niños en su aprendizaje. No recopilamos de forma consciente datos
          personales de menores. Recomendamos que los niños naveguen siempre con
          supervisión de un adulto. Si crees que un menor nos ha enviado datos
          personales, escríbenos y los eliminaremos.
        </p>

        <H2>5. Enlaces a otros sitios</H2>
        <p>
          Recomendamos plataformas educativas externas (como Scratch o Code.org).
          Al salir de Codelandia, la privacidad se rige por las políticas de cada
          sitio, que te invitamos a revisar. No nos hacemos responsables de sus
          prácticas.
        </p>

        <H2>6. Tus derechos y contacto</H2>
        <p>
          Puedes solicitar información sobre el tratamiento de tus datos o pedir
          que eliminemos cualquier mensaje que nos hayas enviado. Para cualquier
          duda sobre esta política, escríbenos a{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-brand-600 underline font-semibold"
          >
            {site.email}
          </a>
          .
        </p>

        <H2>7. Cambios en esta política</H2>
        <p>
          Podemos actualizar esta política para reflejar cambios legales o del
          sitio. Publicaremos aquí la versión vigente con su fecha de
          actualización.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
