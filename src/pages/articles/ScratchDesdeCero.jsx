import ArticleLayout from "../../components/ArticleLayout";
import { H2, Lead, A, OL, UL, Callout } from "../../components/prose";

export default function ScratchDesdeCero() {
  return (
    <ArticleLayout slug="scratch-desde-cero">
      <Lead>
        Scratch es la forma más sencilla de que un niño cree su primer programa,
        y no necesitas saber programar para acompañarlo. En esta guía hacemos un
        primer proyecto completo: un personaje que se mueve, habla y reacciona.
        Con treinta minutos y curiosidad es suficiente.
      </Lead>

      <H2>Antes de empezar</H2>
      <p>
        Entra en <A href="https://scratch.mit.edu">scratch.mit.edu</A> desde
        cualquier computador con navegador. No hace falta instalar nada. Puedes
        trabajar sin cuenta, aunque crear una gratuita (con el permiso y el
        correo de un adulto) permite guardar los proyectos. Pulsa en{" "}
        <strong>«Crear»</strong> y tendrás el editor delante.
      </p>
      <p>
        El editor tiene tres zonas: a la izquierda, los bloques de colores
        ordenados por categorías; en el centro, el área donde se arrastran y
        encajan; y a la derecha, el escenario, donde verás a tu personaje (el
        gato, que en Scratch se llama «objeto»).
      </p>

      <H2>Paso a paso: tu primer proyecto</H2>
      <OL>
        <li>
          <strong>Haz que empiece al pulsar la bandera.</strong> En la categoría
          «Eventos» (amarilla), arrastra el bloque{" "}
          <em>«al presionar bandera verde»</em> al centro. Será el punto de
          partida de todo.
        </li>
        <li>
          <strong>Que el gato salude.</strong> En «Apariencia» (morada), engancha
          debajo el bloque <em>«decir ¡Hola! durante 2 segundos»</em>. Pulsa la
          bandera verde arriba del escenario: el gato hablará.
        </li>
        <li>
          <strong>Que se mueva.</strong> En «Movimiento» (azul), añade{" "}
          <em>«mover 10 pasos»</em>. Cámbialo a 100 para que el salto sea
          visible. Vuelve a pulsar la bandera.
        </li>
        <li>
          <strong>Repite el movimiento.</strong> En «Control» (naranja), saca el
          bloque <em>«repetir 10»</em> y mete dentro el de moverse. Acabas de
          usar un bucle: en lugar de poner diez bloques, uno solo repite la
          orden.
        </li>
        <li>
          <strong>Añade sonido.</strong> En «Sonido» (rosa), prueba{" "}
          <em>«iniciar sonido Miau»</em> dentro del bucle. El gato maullará con
          cada paso.
        </li>
      </OL>

      <Callout title="¡Lo lograste!">
        Con esos cinco bloques tu hijo ya ha creado un programa que reacciona a
        una acción, repite tareas y produce sonido. Eso es exactamente lo que
        hacen los programas «de verdad», solo que con bloques de colores.
      </Callout>

      <H2>Ideas para seguir jugando</H2>
      <p>
        Lo mejor de Scratch es que cada proyecto se puede ampliar. Deja que el
        niño proponga y ayúdale a buscar el bloque que lo haga posible:
      </p>
      <UL>
        <li>
          Que el gato cambie de color al tocarlo, con los bloques de «Apariencia».
        </li>
        <li>
          Que se mueva con las flechas del teclado, combinando «Eventos» y
          «Movimiento».
        </li>
        <li>
          Que aparezca un segundo personaje y conversen por turnos.
        </li>
        <li>
          Que lleve la cuenta de puntos con una «variable», cuando quiera un
          pequeño juego.
        </li>
      </UL>

      <H2>Consejos para quien acompaña</H2>
      <p>
        No le des las respuestas. Si algo no funciona, es una oportunidad de oro:
        pregúntale qué esperaba que pasara y revisen juntos los bloques en orden.
        A esa búsqueda del error se le llama «depurar», y es una de las
        habilidades más valiosas que enseña la programación.
      </p>
      <p>
        Cuando termine un proyecto, anímale a pulsar «Ver dentro» en proyectos de
        otros niños de la comunidad: abrir algo que ya funciona y cambiarlo es una
        forma estupenda de aprender. Y si quieres entender por qué todo esto vale
        tanto la pena, lee{" "}
        <A href="/articulos/por-que-aprender">por qué aprender a programar</A>.
      </p>
    </ArticleLayout>
  );
}
