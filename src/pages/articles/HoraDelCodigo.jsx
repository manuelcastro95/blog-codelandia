import ArticleLayout from "../../components/ArticleLayout";
import { H2, Lead, A, OL, Callout } from "../../components/prose";

export default function HoraDelCodigo() {
  return (
    <ArticleLayout slug="hora-del-codigo">
      <Lead>
        La Hora del Código es una actividad mundial que propone dedicar sesenta
        minutos a descubrir la programación de forma divertida. No necesitas ser
        experto ni tener equipos potentes para organizar una, ya sea en casa con
        tus hijos o en un aula con treinta niños. Aquí tienes cómo prepararla.
      </Lead>

      <p>
        La iniciativa nació para demostrar algo simple: cualquiera puede escribir
        sus primeras líneas de código, y basta una hora para perderle el miedo.
        Las actividades están diseñadas para funcionar sin conocimientos previos,
        con tutoriales guiados y personajes atractivos.
      </p>

      <H2>Antes del día: preparación</H2>
      <OL>
        <li>
          <strong>Elige la actividad.</strong> En{" "}
          <A href="https://hourofcode.com/es">hourofcode.com</A> hay decenas de
          tutoriales filtrables por edad y por dispositivo. Pruébalos tú primero
          para elegir el que mejor encaje.
        </li>
        <li>
          <strong>Revisa los equipos.</strong> La mayoría funcionan en el
          navegador. Comprueba que hay conexión y, si vas a trabajar con un grupo,
          que cada niño o pareja tiene con qué.
        </li>
        <li>
          <strong>Prepara una alternativa sin pantalla.</strong> Por si falla la
          conexión, ten lista una actividad de{" "}
          <A href="/articulos/robotica-sin-pantalla">programación desenchufada</A>.
          Nunca sobra.
        </li>
      </OL>

      <H2>Durante la hora: cómo guiarla</H2>
      <p>
        El secreto de una buena Hora del Código es hablar poco y dejar explorar
        mucho. Una estructura que funciona:
      </p>
      <OL>
        <li>
          <strong>Arranque (5 min).</strong> Explica con un ejemplo cotidiano qué
          es programar: dar instrucciones en orden, como una receta. Nada de
          teoría larga.
        </li>
        <li>
          <strong>Manos a la obra (40 min).</strong> Los niños avanzan en el
          tutorial a su ritmo. Tú circulas, animas y, cuando alguien se atasca,
          respondes con preguntas en lugar de soluciones.
        </li>
        <li>
          <strong>Compartir (10 min).</strong> Quien quiera muestra lo que hizo.
          Ver el trabajo de los demás motiva y da ideas nuevas.
        </li>
        <li>
          <strong>Cierre (5 min).</strong> Destaca que todos escribieron código
          hoy y cuéntales cómo seguir en casa.
        </li>
      </OL>

      <Callout title="El consejo que más importa">
        Resiste la tentación de resolverles los retos. Cuando un niño supera un
        atasco por sí mismo, la satisfacción es lo que lo engancha. Tu papel es
        animar y hacer buenas preguntas, no dar respuestas.
      </Callout>

      <H2>Después: que no quede en un solo día</H2>
      <p>
        Una Hora del Código es una chispa estupenda, pero su valor real está en lo
        que viene después. Antes de terminar, deja un camino claro para seguir:
      </p>
      <OL>
        <li>
          Comparte con las familias el enlace a <A href="https://scratch.mit.edu">Scratch</A>{" "}
          o a los cursos gratuitos de <A href="https://code.org">Code.org</A>.
        </li>
        <li>
          Sugiere un pequeño proyecto para casa: una animación con su nombre, un
          juego sencillo.
        </li>
        <li>
          Si fue en un aula, plantea repetir la actividad una vez al mes para
          mantener vivo el interés.
        </li>
      </OL>

      <p>
        Organizar una Hora del Código es una de las formas más fáciles y
        gratificantes de abrir la puerta de la programación a un niño. Y muchas
        veces, esa primera hora es el comienzo de una afición que dura años. Si
        quieres entender por qué vale tanto la pena, lee{" "}
        <A href="/articulos/por-que-aprender">por qué aprender a programar</A>.
      </p>
    </ArticleLayout>
  );
}
