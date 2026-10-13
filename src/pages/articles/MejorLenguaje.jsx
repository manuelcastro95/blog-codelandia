import ArticleLayout from "../../components/ArticleLayout";
import { H2, H3, Lead, A, UL, Callout } from "../../components/prose";

export default function MejorLenguaje() {
  return (
    <ArticleLayout slug="mejor-lenguaje">
      <Lead>
        «¿Con qué lenguaje debería empezar mi hijo?» es la pregunta que más se
        repite. La respuesta corta: con el que corresponde a su edad, no con el
        que está de moda. Un niño de siete años no necesita Python, y un
        adolescente de trece se aburrirá con bloques de colores. Veamos cómo
        elegir bien.
      </Lead>

      <p>
        Antes de pensar en un lenguaje concreto conviene recordar algo: el primer
        lenguaje no marca el futuro de nadie. Nadie queda «atrapado» por haber
        empezado con Scratch, igual que nadie queda limitado por haber aprendido
        a sumar con fichas. Lo que importa es que el primer contacto sea
        amable, visual y motivador.
      </p>

      <H2>Lenguajes de bloques: el mejor comienzo</H2>
      <p>
        Para la mayoría de niños, lo ideal es empezar con un lenguaje de bloques.
        En lugar de escribir texto, se arrastran piezas de colores que encajan
        como un rompecabezas. Esto elimina el mayor obstáculo de los
        principiantes: los errores de escritura. El niño se concentra en la
        lógica, no en si olvidó un punto y coma.
      </p>
      <UL>
        <li>
          <strong>ScratchJr</strong> (5 a 7 años): bloques con dibujos, sin
          necesidad de leer. Perfecto para contar historias animadas.
        </li>
        <li>
          <strong>Scratch</strong> (8 a 12 años): el estándar mundial para
          iniciarse. Permite crear juegos, animaciones e historias con una
          comunidad enorme de proyectos para inspirarse.
        </li>
        <li>
          <strong>Blockly</strong>: la tecnología de bloques que usan muchos
          juegos de <A href="https://code.org">Code.org</A>. Sirve de puente
          hacia el código escrito, porque muestra el texto equivalente a cada
          bloque.
        </li>
      </UL>

      <H2>El salto al código escrito</H2>
      <p>
        Hacia los 11 o 12 años, muchos niños empiezan a sentir que los bloques se
        les quedan cortos. Es la señal de que están listos para escribir. Aquí
        hay dos caminos razonables.
      </p>

      <H3>Python</H3>
      <p>
        Es, para la mayoría, el mejor primer lenguaje de texto. Su sintaxis es
        tan limpia que se lee casi como inglés, y se usa de verdad en ciencia,
        datos e inteligencia artificial, así que lo aprendido sirve más allá de
        los ejercicios. Para empezar, plataformas como el propio tutorial de
        Python o entornos pensados para niños hacen el camino muy llevadero.
      </p>

      <H3>JavaScript</H3>
      <p>
        Es el lenguaje de las páginas web. Su gran ventaja es la gratificación
        inmediata: con unas pocas líneas se ve algo moverse en el navegador, sin
        instalar nada. Es una gran opción para quien sueña con crear su propia
        web o sus propios juegos para compartir con amigos.
      </p>

      <Callout title="¿Python o JavaScript?">
        Si dudas, empieza por Python: su sintaxis perdona más y enseña buenos
        hábitos. JavaScript brilla cuando el niño quiere ver su creación
        publicada en internet. En cualquier caso, quien aprende uno aprende el
        siguiente con mucha facilidad.
      </Callout>

      <H2>Qué buscar en un primer lenguaje</H2>
      <p>
        Más allá del nombre, un buen primer lenguaje para un niño cumple cuatro
        condiciones:
      </p>
      <UL>
        <li>
          <strong>Resultados visibles y rápidos.</strong> Ver algo pasar en la
          pantalla mantiene la motivación.
        </li>
        <li>
          <strong>Perdona los errores.</strong> Cuanto menos castigue un punto y
          coma olvidado, mejor para quien empieza.
        </li>
        <li>
          <strong>Tiene comunidad y materiales.</strong> Proyectos de ejemplo,
          tutoriales y foros donde encontrar ayuda.
        </li>
        <li>
          <strong>Es gratuito.</strong> Ninguna de las buenas opciones para
          empezar cuesta dinero.
        </li>
      </UL>

      <H2>El error de obsesionarse con el lenguaje</H2>
      <p>
        Muchos adultos invierten demasiada energía en elegir «el lenguaje
        perfecto» y muy poca en lo único que de verdad importa: que el niño
        disfrute creando. Es uno de los{" "}
        <A href="/articulos/errores-de-padres">errores más comunes al enseñar en
        casa</A>. La lógica que se aprende con Scratch es la misma que luego se
        aplica en Python; cambiar de lenguaje más adelante es cuestión de días,
        no de empezar de cero.
      </p>
      <p>
        Así que la mejor respuesta a «¿qué lenguaje elijo?» es: el que haga que
        tu hijo quiera volver a sentarse a crear mañana.
      </p>
    </ArticleLayout>
  );
}
