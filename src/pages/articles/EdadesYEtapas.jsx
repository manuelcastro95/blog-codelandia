import ArticleLayout from "../../components/ArticleLayout";
import { H2, H3, Lead, A, UL, Callout } from "../../components/prose";

export default function EdadesYEtapas() {
  return (
    <ArticleLayout slug="edades-y-etapas">
      <Lead>
        Lo que entusiasma a un niño de cinco años aburre a uno de once, y lo que
        reta a uno de once frustra a uno de seis. Acertar con la actividad según
        la edad es la diferencia entre un niño que pide más y uno que abandona.
        Esta guía ordena el camino por etapas.
      </Lead>

      <p>
        Las edades que siguen son orientativas: cada niño madura a su ritmo. Úsalas
        como brújula, no como calendario. La señal de que una etapa va bien es
        sencilla: el niño disfruta y quiere continuar.
      </p>

      <H2>De 4 a 6 años: la lógica antes que la pantalla</H2>
      <p>
        A esta edad el objetivo no es usar un computador, sino entender la idea de
        dar instrucciones en orden. Se trabaja mejor con el cuerpo y con juegos.
      </p>
      <UL>
        <li>
          Juegos de secuencias: «primero nos ponemos los calcetines, después los
          zapatos». Invertir el orden a propósito provoca risas y enseña que la
          secuencia importa.
        </li>
        <li>
          El juego del robot: el niño da órdenes y el adulto las ejecuta
          literalmente.
        </li>
        <li>
          Primeras apps de bloques con dibujos, como{" "}
          <A href="https://www.scratchjr.org">ScratchJr</A>, en sesiones cortas.
        </li>
      </UL>

      <H3>Qué evitar</H3>
      <p>
        Sesiones largas frente a la pantalla y cualquier cosa que exija leer con
        soltura. A esta edad, menos es más.
      </p>

      <H2>De 7 a 9 años: crear con bloques</H2>
      <p>
        El niño ya lee y puede sostener la atención en un proyecto. Es la edad de
        oro para <A href="https://scratch.mit.edu">Scratch</A> y los cursos de{" "}
        <A href="https://code.org">Code.org</A>. Aquí empieza a crear de verdad:
        sus propias animaciones, un cuento interactivo, un primer juego simple.
      </p>
      <UL>
        <li>
          Introduce de a poco los conceptos: primero secuencias, luego bucles
          («repetir»), después condiciones («si... entonces»).
        </li>
        <li>
          Deja espacio para la creación libre, no solo ejercicios con una única
          solución.
        </li>
        <li>
          Celebra los proyectos terminados: compartirlos con la familia motiva
          enormemente.
        </li>
      </UL>

      <H2>De 10 a 12 años: hacia el código escrito</H2>
      <p>
        Muchos niños empiezan a sentir que los bloques se les quedan cortos y
        quieren «escribir código de verdad». Es el momento de dar el salto, sin
        prisa.
      </p>
      <UL>
        <li>
          Proyectos más ambiciosos en Scratch: juegos con puntuación, varios
          niveles, personajes que interactúan.
        </li>
        <li>
          Primer contacto con texto a través de Blockly, que muestra el código
          equivalente a cada bloque.
        </li>
        <li>
          Primeras líneas de <strong>Python</strong>, el lenguaje más amable para
          empezar a escribir, como explicamos en{" "}
          <A href="/articulos/mejor-lenguaje">qué lenguaje elegir</A>.
        </li>
      </UL>

      <Callout title="La regla de oro en cada etapa">
        Sube la dificultad solo cuando el niño lo pida, no cuando tú creas que
        «ya tocaba». El aburrimiento y la frustración son las dos formas más
        rápidas de que abandone. Si disfruta, va por buen camino.
      </Callout>

      <H2>Y después de los 12</H2>
      <p>
        A partir de la adolescencia se abre todo: desarrollo web con JavaScript,
        videojuegos, robótica con placas como micro:bit o Arduino, incluso
        primeras nociones de inteligencia artificial. Pero nada de eso se
        disfruta si antes no se construyó una base sólida y, sobre todo, el gusto
        por crear. Esa base es la que se siembra en los primeros años.
      </p>
      <p>
        Respeta el ritmo, acompaña sin presionar y deja que la curiosidad marque
        el paso. Un niño que asocia la programación con diversión volverá a ella
        una y otra vez; uno que la asocia con obligación, la abandonará en cuanto
        pueda.
      </p>
    </ArticleLayout>
  );
}
