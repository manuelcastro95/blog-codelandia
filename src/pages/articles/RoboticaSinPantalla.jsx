import ArticleLayout from "../../components/ArticleLayout";
import { H2, H3, Lead, A, UL, Callout } from "../../components/prose";

export default function RoboticaSinPantalla() {
  return (
    <ArticleLayout slug="robotica-sin-pantalla">
      <Lead>
        No hace falta una pantalla para aprender a programar. La lógica que hay
        detrás del código —secuencias, bucles, condiciones— se entrena con
        cartas, juguetes y juegos de mesa. Se le llama «programación
        desenchufada» y es perfecta para los más pequeños y para equilibrar el
        tiempo frente al dispositivo.
      </Lead>

      <p>
        La idea es sencilla: enseñar a pensar como un programador sin programar.
        Para un niño pequeño, mover su propio cuerpo o unas fichas es mucho más
        claro que entender qué ocurre dentro de una computadora. Y para las
        familias, es una forma de aprender juntos lejos de las pantallas.
      </p>

      <H2>Juegos para hacer en casa sin materiales</H2>

      <H3>El robot humano</H3>
      <p>
        El clásico imbatible. El niño es el «programador» y tú el «robot». Solo te
        mueves con sus órdenes: «avanza dos pasos», «gira a la derecha», «levanta
        el brazo». Si la instrucción es ambigua, hazlo mal a propósito: si dice
        «ve a la puerta» sin indicar cómo, choca con una silla. Descubrirá que un
        robot necesita instrucciones precisas y en orden, igual que un programa.
      </p>

      <H3>El sándwich imposible</H3>
      <p>
        Pídele que te explique, paso a paso, cómo preparar un sándwich, y sigue
        sus órdenes al pie de la letra. Si dice «pon el jamón» sin decir «abre el
        paquete», pon el paquete entero sobre el pan. Las risas están aseguradas y
        la lección —descomponer una tarea en pasos exactos— queda grabada.
      </p>

      <H3>Caminos con flechas</H3>
      <p>
        Dibuja una cuadrícula en papel con una salida y una meta. Con flechas
        (arriba, abajo, izquierda, derecha) el niño escribe el «programa» que
        lleva un muñeco de un punto a otro. Añade obstáculos para subir la
        dificultad. Esto es, literalmente, lo que hacen muchos juegos de{" "}
        <A href="https://code.org">Code.org</A>, pero en papel.
      </p>

      <H2>Juguetes y juegos de mesa que enseñan a programar</H2>
      <UL>
        <li>
          <strong>Robots de suelo programables</strong> (tipo Bee-Bot): el niño
          introduce una secuencia de botones y el robot la ejecuta. Ideal de 4 a
          7 años.
        </li>
        <li>
          <strong>Juegos de mesa de lógica</strong> en los que hay que planear una
          ruta o una secuencia de acciones antes de actuar.
        </li>
        <li>
          <strong>Cartas de secuencias</strong>, caseras incluso: tarjetas con
          flechas y acciones que se ordenan para lograr un objetivo.
        </li>
      </UL>

      <Callout title="Lo mejor de lo desenchufado">
        No depende de baterías, pantallas ni conexión, se juega en familia y
        funciona especialmente bien con los más pequeños. Es también una respuesta
        natural a la preocupación por el{" "}
        <A href="/articulos/tiempo-de-pantalla">tiempo de pantalla</A>.
      </Callout>

      <H2>Qué conceptos se entrenan</H2>
      <p>
        Aunque no haya código, estos juegos enseñan exactamente las mismas ideas
        que luego aparecen en Scratch o Python:
      </p>
      <UL>
        <li>
          <strong>Secuencia:</strong> el orden de los pasos importa.
        </li>
        <li>
          <strong>Bucle:</strong> «repite tres veces: avanza y gira» ahorra
          esfuerzo.
        </li>
        <li>
          <strong>Condición:</strong> «si hay un obstáculo, gira» introduce la
          toma de decisiones.
        </li>
        <li>
          <strong>Depuración:</strong> cuando el muñeco no llega a la meta, hay
          que revisar las flechas y encontrar el fallo.
        </li>
      </UL>

      <p>
        Cuando el niño ya domina estas ideas con las manos, pasar a una pantalla
        es pan comido: solo cambia la herramienta, no la forma de pensar. La
        programación desenchufada es, en el fondo, la mejor preparación para la
        enchufada.
      </p>
    </ArticleLayout>
  );
}
