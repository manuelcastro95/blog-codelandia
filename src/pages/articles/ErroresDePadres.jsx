import ArticleLayout from "../../components/ArticleLayout";
import { H2, Lead, A, Callout } from "../../components/prose";

export default function ErroresDePadres() {
  return (
    <ArticleLayout slug="errores-de-padres">
      <Lead>
        Querer que un hijo aprenda a programar es un gran impulso, pero el
        entusiasmo mal dirigido puede lograr justo lo contrario: que lo odie.
        Estos son los errores más comunes al enseñar programación en casa y, sobre
        todo, qué hacer en su lugar.
      </Lead>

      <H2>1. Convertirlo en una obligación</H2>
      <p>
        El error más frecuente. En cuanto programar se vuelve «otra tarea» con
        horario fijo y control de resultados, pierde lo que lo hacía atractivo: la
        sensación de juego. Un niño obligado cumple sin disfrutar y abandona a la
        primera oportunidad.
      </p>
      <p>
        <strong>En su lugar:</strong> preséntalo como un juego más, disponible
        cuando le apetezca. Mejor tres sesiones cortas por gusto que una hora
        impuesta. La motivación crece desde dentro, no desde la agenda.
      </p>

      <H2>2. Resolverle todos los problemas</H2>
      <p>
        Cuando algo no funciona, la tentación de tomar el ratón y arreglarlo es
        enorme. Pero cada vez que lo haces, le robas el momento más valioso del
        aprendizaje: encontrar el error por sí mismo.
      </p>
      <p>
        <strong>En su lugar:</strong> responde con preguntas. «¿Qué querías que
        pasara?», «¿en qué paso crees que falla?», «¿qué pasa si lo probamos
        así?». Buscar el error se llama depurar y es una habilidad central de la
        programación.
      </p>

      <H2>3. Obsesionarse con el lenguaje de moda</H2>
      <p>
        Muchos adultos gastan energía decidiendo si el niño debe aprender Python,
        JavaScript o lo que leyeron que «pide el mercado». A los ocho años, nada
        de eso importa.
      </p>
      <p>
        <strong>En su lugar:</strong> empieza por lo visual y adecuado a su edad,
        como <A href="https://scratch.mit.edu">Scratch</A>. La lógica que aprenda
        allí se traslada a cualquier lenguaje después. Lo tratamos en{" "}
        <A href="/articulos/mejor-lenguaje">qué lenguaje elegir</A>.
      </p>

      <H2>4. Esperar resultados espectaculares</H2>
      <p>
        Ver el proyecto de otro niño en internet y pensar «el mío debería hacer
        algo así» genera una presión injusta. El aprendizaje real es lento y está
        lleno de intentos fallidos.
      </p>
      <p>
        <strong>En su lugar:</strong> celebra el proceso, no solo el producto. Un
        personaje que por fin se mueve es un logro enorme para quien empieza.
        Valora el esfuerzo y la constancia por encima del resultado.
      </p>

      <H2>5. Compararlo con otros niños</H2>
      <p>
        «Tu primo a tu edad ya hacía videojuegos» es una frase que apaga
        cualquier chispa. Cada niño tiene su ritmo, y en programación los ritmos
        varían muchísimo.
      </p>
      <p>
        <strong>En su lugar:</strong> compara al niño solo consigo mismo. «Mira lo
        que no te salía la semana pasada y ahora sí» motiva; compararlo con otros,
        nunca.
      </p>

      <H2>6. Pensar que necesitas saber programar</H2>
      <p>
        Muchas familias se autoexcluyen creyendo que no pueden ayudar porque no
        saben de código. Es un malentendido.
      </p>
      <p>
        <strong>En su lugar:</strong> aprende con tu hijo. Verte intentar,
        equivocarte y seguir buscando le enseña más que cualquier explicación
        técnica. Tu papel no es el de experto, sino el de compañero de aventura.
      </p>

      <Callout title="En una frase">
        El mayor favor que puedes hacerle a un niño que empieza a programar es
        proteger su disfrute. Si asocia el código con diversión, volverá solo; si
        lo asocia con presión, huirá en cuanto pueda.
      </Callout>

      <p>
        Enseñar a programar en casa no va de tener respuestas, sino de crear un
        ambiente donde equivocarse sea seguro y crear sea divertido. Si logras
        eso, el resto llega solo. Para empezar con buen pie, mira nuestra guía de{" "}
        <A href="/articulos/edades-y-etapas">qué enseñar según la edad</A>.
      </p>
    </ArticleLayout>
  );
}
