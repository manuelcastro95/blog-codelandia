import ArticleLayout from "../../components/ArticleLayout";
import { H2, Lead, A, UL, Callout } from "../../components/prose";

export default function PorQueAprender() {
  return (
    <ArticleLayout slug="por-que-aprender">
      <Lead>
        En un mundo donde una pantalla acompaña casi cada actividad, saber
        programar se parece cada vez más a saber leer y escribir: no convierte a
        nadie en genio, pero abre puertas y cambia la forma de pensar. La buena
        noticia es que un niño no necesita ser «bueno en matemáticas» ni tener un
        computador potente para empezar.
      </Lead>

      <p>
        Cuando hablamos de que los niños aprendan a programar, muchas familias
        imaginan pantallas negras llenas de símbolos. La realidad es mucho más
        amable. Aprender a programar a los seis, ocho o diez años consiste sobre
        todo en jugar: arrastrar bloques de colores, contar una historia
        animada, resolver pequeños acertijos. El código vendrá después, y de
        forma natural.
      </p>

      <H2>No se trata de crear programadores</H2>
      <p>
        El objetivo de iniciar a un niño en la programación no es que termine
        trabajando en una empresa de tecnología. La mayoría no lo hará, igual
        que la mayoría de quienes aprenden a tocar la flauta en el colegio no
        serán músicos. Lo valioso es lo que se entrena por el camino: la
        capacidad de dividir un problema grande en pasos pequeños, de probar una
        idea, ver que falla y corregirla sin frustrarse.
      </p>
      <p>
        Esa forma de pensar —ordenada, paciente, dispuesta a equivocarse— sirve
        para las matemáticas, para escribir un texto y para la vida. Programar
        es una de las maneras más entretenidas de ejercitarla, porque el niño ve
        el resultado de inmediato: su personaje salta, su historia avanza, su
        juego funciona.
      </p>

      <H2>Qué desarrolla realmente</H2>
      <UL>
        <li>
          <strong>Pensamiento lógico.</strong> Para que un personaje llegue a la
          meta hay que darle instrucciones en el orden correcto. Si algo sale
          mal, el niño aprende a revisar paso por paso dónde estuvo el error.
        </li>
        <li>
          <strong>Tolerancia a la frustración.</strong> En programación casi
          nada funciona a la primera, y eso está bien. El niño descubre que
          equivocarse no es un fracaso, sino parte del proceso de construir.
        </li>
        <li>
          <strong>Creatividad.</strong> Un mismo reto se puede resolver de mil
          maneras. Programar da una hoja en blanco: el niño inventa sus propios
          juegos, animaciones y cuentos interactivos.
        </li>
        <li>
          <strong>Concentración.</strong> Terminar un proyecto exige sostener la
          atención un buen rato, algo cada vez más difícil y más valioso.
        </li>
        <li>
          <strong>Autonomía digital.</strong> Pasa de ser un consumidor pasivo
          de pantallas a alguien que entiende cómo funcionan y es capaz de crear
          con ellas.
        </li>
      </UL>

      <H2>¿A qué edad se puede empezar?</H2>
      <p>
        Antes de saber leer con fluidez, un niño ya puede entender la idea básica
        de dar instrucciones en secuencia con juegos físicos o aplicaciones de
        bloques con dibujos, como{" "}
        <A href="https://www.scratchjr.org">ScratchJr</A>, pensada para edades de
        5 a 7 años. A partir de los 8, herramientas como{" "}
        <A href="https://scratch.mit.edu">Scratch</A> o{" "}
        <A href="https://code.org">Code.org</A> permiten construir proyectos más
        ambiciosos. Hacia los 11 o 12, muchos niños están listos para escribir
        sus primeras líneas de un lenguaje real como Python.
      </p>
      <p>
        Lo tratamos en detalle en nuestra guía sobre{" "}
        <A href="/articulos/edades-y-etapas">qué enseñar según la edad</A>, pero
        la regla general es sencilla: empezar por lo visual y lo lúdico, y subir
        la dificultad solo cuando el niño lo pida.
      </p>

      <Callout title="Una idea para esta semana">
        No hace falta comprar nada ni instalar programas complicados. Entra con
        tu hijo en Scratch, elijan juntos un personaje y pónganle como reto que
        se mueva por la pantalla y diga «¡Hola!». Con eso basta para encender la
        chispa. Si quieres una guía paso a paso, mira{" "}
        <A href="/articulos/scratch-desde-cero">Scratch desde cero</A>.
      </Callout>

      <H2>El papel de la familia</H2>
      <p>
        No necesitas saber programar para acompañar a tu hijo. De hecho,
        aprender juntos suele funcionar mejor: le muestras que equivocarse y
        buscar la solución es normal, incluso para los adultos. Tu trabajo no es
        dar respuestas, sino hacer buenas preguntas: «¿qué querías que pasara?»,
        «¿en qué paso crees que falla?», «¿y si lo probamos de otra forma?».
      </p>
      <p>
        Programar no es una asignatura más que sumar a una tarde ya cargada. Es
        una manera distinta de jugar, de crear y de pensar. Y como todo lo que
        de verdad importa en la infancia, se disfruta más cuando no se vive como
        una obligación.
      </p>
    </ArticleLayout>
  );
}
