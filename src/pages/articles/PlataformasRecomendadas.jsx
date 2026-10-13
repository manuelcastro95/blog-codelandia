import ArticleLayout from "../../components/ArticleLayout";
import { H2, H3, Lead, A, UL, Callout } from "../../components/prose";

export default function PlataformasRecomendadas() {
  return (
    <ArticleLayout slug="plataformas-recomendadas">
      <Lead>
        Hay decenas de plataformas para que los niños aprendan a programar, y no
        todas valen lo mismo ni sirven para la misma edad. Esta es una selección
        honesta de las que de verdad funcionan, qué ofrece cada una y para quién
        es. Casi todas son gratuitas.
      </Lead>

      <p>
        Antes de la lista, un consejo: no hace falta probarlas todas. Es mejor
        elegir una, quedarse en ella hasta terminar algún proyecto y solo
        después explorar otra. Saltar de herramienta en herramienta cada semana
        impide que el niño sienta el orgullo de completar algo.
      </p>

      <H2>Para empezar (5 a 8 años)</H2>

      <H3>ScratchJr</H3>
      <p>
        Aplicación gratuita para tablet pensada para quienes aún no leen con
        soltura. Los bloques tienen dibujos en lugar de palabras, y con ellos se
        crean historias animadas sencillas. Es el primer paso ideal.{" "}
        <A href="https://www.scratchjr.org">scratchjr.org</A>
      </p>

      <H3>Code.org – Cursos Express y Pre-lectores</H3>
      <p>
        <A href="https://code.org">Code.org</A> es una organización sin ánimo de
        lucro con cursos gratuitos excelentes. Sus actividades con personajes
        conocidos (de películas y videojuegos populares) enganchan muchísimo, y
        hay rutas específicas para quienes todavía no leen.
      </p>

      <H2>El estándar (8 a 12 años)</H2>

      <H3>Scratch</H3>
      <p>
        Creado por el MIT, es la plataforma más usada del mundo para iniciar a
        los niños. Se programa arrastrando bloques y se pueden crear juegos,
        animaciones y cuentos interactivos. Su mayor fortaleza es la comunidad:
        millones de proyectos públicos que el niño puede abrir, ver por dentro y
        modificar para aprender. Es gratis y funciona en el navegador.{" "}
        <A href="https://scratch.mit.edu">scratch.mit.edu</A>
      </p>

      <H3>Blockly Games</H3>
      <p>
        Una serie de juegos gratuitos de Google que llevan de la mano desde los
        bloques hasta el código escrito. Cada juego introduce un concepto nuevo
        (bucles, condiciones, funciones) con retos que suben de dificultad poco a
        poco. <A href="https://blockly.games">blockly.games</A>
      </p>

      <H3>Tynker</H3>
      <p>
        Muy similar a Scratch en filosofía, con una progresión de cursos muy
        cuidada. Parte de su contenido es gratuito y parte es de pago. Buena
        opción si buscas un camino guiado con lecciones ordenadas.
      </p>

      <H2>Para dar el salto (11 años en adelante)</H2>

      <H3>Code.org – Curso de informática</H3>
      <p>
        Sus cursos por edades (Curso A hasta F, y «CS Discoveries» para
        adolescentes) forman una ruta completa que llega hasta JavaScript. Es
        gratuito y muchos colegios lo usan como columna vertebral de su clase de
        tecnología.
      </p>

      <H3>Python con entornos para principiantes</H3>
      <p>
        Cuando el niño pide escribir código «de verdad», Python es la mejor
        puerta de entrada. Hay editores en línea que no requieren instalar nada y
        tutoriales pensados para su edad. Lo vemos en nuestra guía sobre{" "}
        <A href="/articulos/mejor-lenguaje">qué lenguaje elegir</A>.
      </p>

      <Callout title="Cómo elegir sin agobios">
        Si tu hijo tiene entre 5 y 7 años, empieza por ScratchJr. Entre 8 y 12,
        Scratch es la apuesta segura. A partir de los 11, si pide más, pasa a
        Code.org CS Discoveries o a Python. No necesitas más para años de
        aprendizaje.
      </Callout>

      <H2>Señales de una buena plataforma</H2>
      <UL>
        <li>
          <strong>Es apropiada para la edad</strong> y no pide saltos demasiado
          grandes.
        </li>
        <li>
          <strong>Da libertad para crear</strong>, no solo ejercicios cerrados
          con una única respuesta.
        </li>
        <li>
          <strong>Cuida la privacidad</strong> de los menores y es clara sobre
          qué datos recoge.
        </li>
        <li>
          <strong>No presiona con compras</strong> a cada paso ni llena la
          pantalla de anuncios.
        </li>
      </UL>

      <p>
        Con cualquiera de estas herramientas y un poco de acompañamiento, un niño
        tiene material para meses de descubrimiento. Lo demás lo pone su
        curiosidad.
      </p>
    </ArticleLayout>
  );
}
