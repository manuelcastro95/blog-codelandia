import ArticleLayout from "../../components/ArticleLayout";
import { H2, Lead, A, UL, Callout } from "../../components/prose";

export default function TiempoDePantalla() {
  return (
    <ArticleLayout slug="tiempo-de-pantalla">
      <Lead>
        «¿No es contradictorio animar a mi hijo a programar y a la vez limitar las
        pantallas?» Es una duda legítima. La respuesta está en distinguir qué hace
        el niño frente al dispositivo: no es lo mismo consumir que crear. Aquí
        proponemos una forma sana de mirar el tiempo de pantalla.
      </Lead>

      <H2>No todo el tiempo de pantalla es igual</H2>
      <p>
        Contar solo los minutos deja fuera lo más importante: qué está haciendo el
        niño. Hay una diferencia enorme entre dos actividades que, en el reloj,
        duran lo mismo.
      </p>
      <UL>
        <li>
          <strong>Consumo pasivo:</strong> ver vídeos uno tras otro, deslizar sin
          fin. El niño recibe, no decide. Es el que conviene vigilar más de cerca.
        </li>
        <li>
          <strong>Creación activa:</strong> construir un juego en Scratch, animar
          una historia, resolver un reto de lógica. El niño piensa, prueba,
          corrige y crea. Se parece más a tocar un instrumento que a ver
          televisión.
        </li>
      </UL>
      <p>
        Programar cae de lleno en la segunda categoría. Una hora creando no
        «gasta» el tiempo de pantalla de la misma manera que una hora de vídeos
        automáticos.
      </p>

      <Callout title="La pregunta útil">
        En vez de «¿cuánto tiempo lleva en la pantalla?», prueba con «¿la pantalla
        lo tiene a él, o él tiene a la pantalla?». Si está creando y decidiendo,
        va por buen camino. Si solo recibe sin parar, es momento de intervenir.
      </Callout>

      <H2>Pautas para un equilibrio sano</H2>
      <UL>
        <li>
          <strong>Prioriza crear sobre consumir.</strong> Dentro del tiempo de
          pantalla acordado, da preferencia a las actividades donde el niño
          construye algo.
        </li>
        <li>
          <strong>Acompaña, no solo supervises.</strong> Sentarte un rato a su
          lado convierte la pantalla en una actividad compartida y te permite ver
          qué hace realmente.
        </li>
        <li>
          <strong>Marca principio y final claros.</strong> «Hasta terminar este
          nivel» o «hasta que el personaje se mueva» cierra mejor que un corte
          brusco a mitad de un reto.
        </li>
        <li>
          <strong>Alterna con lo desenchufado.</strong> La{" "}
          <A href="/articulos/robotica-sin-pantalla">programación sin pantalla</A>{" "}
          entrena la misma lógica sin sumar minutos de dispositivo.
        </li>
        <li>
          <strong>Cuida los horarios.</strong> Evita las pantallas justo antes de
          dormir, sea para crear o para consumir.
        </li>
      </UL>

      <H2>El equilibrio, no la prohibición</H2>
      <p>
        Prohibir las pantallas por completo no prepara a un niño para un mundo
        lleno de ellas; solo retrasa el aprendizaje de usarlas con criterio. El
        objetivo no es cero pantallas, sino una relación sana: que el niño sepa
        crear con la tecnología, decidir cuándo apagarla y disfrutar también de lo
        que ocurre lejos de ella.
      </p>
      <p>
        Vista así, la programación es una aliada. Enseña a tu hijo a ser autor y
        no solo espectador, y le da una razón para usar la pantalla con un
        propósito. Si te preocupa cómo empezar sin excederte, las actividades
        cortas y guiadas de una{" "}
        <A href="/articulos/hora-del-codigo">Hora del Código</A> son un punto de
        partida perfecto.
      </p>
    </ArticleLayout>
  );
}
