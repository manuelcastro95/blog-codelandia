const ComputationalThinking = () => {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">
                ¿Qué es el pensamiento computacional y por qué es clave para los niños?
            </h1>

            <img
                src="/img/pensamiento-computacional.png"
                alt="Niña usando bloques de lógica"
                className="rounded-xl shadow-md mb-6 w-full max-h-64 object-cover"
            />

            <p className="mb-4 text-gray-700">
                El pensamiento computacional es la habilidad de resolver problemas utilizando conceptos similares a los que emplea una computadora. Esta competencia no solo se aplica en la programación, sino también en actividades cotidianas que requieren lógica, organización y análisis.
            </p>

            <p className="mb-4 text-gray-700">
                Cuando los niños desarrollan esta habilidad, aprenden a estructurar su pensamiento, identificar patrones, anticipar errores y proponer soluciones creativas. ¡Todo esto mientras se divierten!
            </p>

            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Los pilares del pensamiento computacional</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li><strong>Descomposición:</strong> dividir un problema grande en partes más pequeñas y manejables.</li>
                <li><strong>Reconocimiento de patrones:</strong> identificar similitudes o secuencias que se repiten.</li>
                <li><strong>Abstracción:</strong> eliminar detalles innecesarios para centrarse en lo importante.</li>
                <li><strong>Algoritmos:</strong> crear instrucciones paso a paso para resolver un problema.</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Ejemplos sencillos en casa</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Armar una receta paso a paso con tus hijos es crear un algoritmo.</li>
                <li>Organizar su mochila con base en categorías: libros, útiles, lonchera, es un ejercicio de descomposición.</li>
                <li>Resolver un laberinto o rompecabezas implica identificar patrones y estrategias.</li>
            </ul>

            <p className="mb-6 text-gray-700">
                Lo mejor es que estas habilidades no necesitan computadoras para desarrollarse: pueden aprenderse a través de juegos, cuentos, retos lógicos y actividades cotidianas.
            </p>

            <p className="text-lg text-indigo-700 font-medium bg-indigo-50 p-4 rounded-xl shadow-sm">
                En Codelandia, cada actividad está diseñada para despertar la curiosidad de los niños mientras potencian su capacidad para pensar como verdaderos solucionadores de problemas.
            </p>
        </main>
    );
};

export default ComputationalThinking;
