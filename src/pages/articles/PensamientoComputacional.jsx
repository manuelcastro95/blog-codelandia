import ArticleLayout from "../../components/ArticleLayout";
import { H2, H3, Lead, A, UL, Callout } from "../../components/prose";

export default function PensamientoComputacional() {
  return (
    <ArticleLayout slug="pensamiento-computacional">
      <Lead>
        El pensamiento computacional es la habilidad de resolver problemas de
        forma ordenada, como lo haría una computadora: dividiéndolos en partes,
        buscando patrones y diseñando una serie de pasos claros. Lo interesante
        es que no necesita computadora para practicarse, y que un niño lo usa sin
        saberlo cada vez que organiza un juego o sigue una receta.
      </Lead>

      <p>
        Detrás de un término que suena técnico hay una idea muy cotidiana.
        Cuando preparas una lonchera, cuando ordenas los juguetes por tipo o
        cuando explicas cómo llegar a tu casa, estás usando pensamiento
        computacional. La programación es solo una de las muchas formas de
        entrenarlo, y una de las más divertidas para los niños.
      </p>

      <H2>Las cuatro habilidades que lo forman</H2>
      <p>
        Los especialistas en educación suelen describir el pensamiento
        computacional con cuatro piezas que trabajan juntas. Vale la pena
        conocerlas porque dan nombre a cosas que los niños ya hacen.
      </p>

      <H3>1. Descomposición</H3>
      <p>
        Es partir un problema grande en problemas pequeños. Un juego de mesa no
        se explica de golpe: primero las fichas, luego el tablero, después las
        reglas y por último cómo se gana. Enseñar a un niño a preguntarse «¿en
        qué partes puedo dividir esto?» le da una herramienta para no sentirse
        abrumado ante algo complejo.
      </p>

      <H3>2. Reconocimiento de patrones</H3>
      <p>
        Es notar lo que se repite. Si para dibujar una escalera repites el mismo
        escalón diez veces, has encontrado un patrón. En programación, descubrir
        patrones permite ahorrar trabajo: en vez de dar la misma orden una y otra
        vez, se usa un bucle que la repite por ti.
      </p>

      <H3>3. Abstracción</H3>
      <p>
        Es quedarse con lo importante y dejar de lado el detalle que no hace
        falta. Un mapa del metro no muestra las calles reales ni la distancia
        exacta: muestra solo lo que necesitas para no perderte. Abstraer es,
        justamente, decidir qué información importa para el problema que tienes
        delante.
      </p>

      <H3>4. Algoritmos</H3>
      <p>
        Es escribir la secuencia de pasos para lograr algo, en el orden
        correcto. Una receta de cocina es un algoritmo. Cepillarse los dientes
        también. En programación, el niño aprende que el orden importa: si pones
        el paso 3 antes del 2, el resultado cambia.
      </p>

      <H2>Cómo practicarlo sin pantalla</H2>
      <p>
        Una de las mejores cosas del pensamiento computacional es que se entrena
        jugando, lejos de cualquier dispositivo. A esto se le llama{" "}
        <A href="/articulos/robotica-sin-pantalla">programación desenchufada</A>,
        y es ideal para los más pequeños.
      </p>
      <UL>
        <li>
          <strong>El robot humano.</strong> Tu hijo da órdenes («da dos pasos»,
          «gira a la derecha») y tú las obedeces al pie de la letra, incluso si
          te llevan a chocar con la pared. Descubrirá rápido que las
          instrucciones deben ser precisas.
        </li>
        <li>
          <strong>Ordenar por reglas.</strong> Clasificar cartas, legos o
          calcetines por color, tamaño o forma entrena la descomposición y los
          patrones.
        </li>
        <li>
          <strong>Dibujo por instrucciones.</strong> Uno describe un dibujo paso
          a paso y el otro lo dibuja sin verlo. Al comparar el resultado se
          entiende por qué un «algoritmo» debe ser claro.
        </li>
      </UL>

      <Callout title="La clave">
        El pensamiento computacional no se enseña con una clase magistral, sino
        con preguntas. Ante cualquier reto cotidiano, acostumbra a tu hijo a
        pensar en voz alta: «¿en qué pasos lo dividimos?», «¿qué se repite
        aquí?», «¿qué es lo único que de verdad importa?».
      </Callout>

      <H2>Del juego al código</H2>
      <p>
        Cuando un niño ya descompone, ve patrones y ordena pasos, la
        programación deja de ser un muro y se convierte en el lugar natural donde
        aplicar todo eso. Por eso muchas escuelas trabajan primero el
        pensamiento computacional y solo después presentan una herramienta como{" "}
        <A href="https://scratch.mit.edu">Scratch</A>. El concepto va delante;
        la tecnología, detrás.
      </p>
      <p>
        Visto así, programar no es la meta: es una excusa estupenda para
        desarrollar una manera de pensar que acompañará al niño mucho más allá de
        cualquier pantalla.
      </p>
    </ArticleLayout>
  );
}
