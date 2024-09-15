const Consigna = () => {
    return (
        <>
            <h3>
                Debemos crear una aplicación de manejo de tareas personales.
            </h3>
            <h4>
                La app nos debe permitir:
            </h4>
            <ul>

                <li>Agregar una nueva tarea a la lista. </li>

                <li>Marcar una tarea como completada e indicarlo de alguna manera (tachando el texto o cambiando el color del mismo (gris claro, por ejemplo)).</li>

                <li>Borrar una tarea de la lista.</li>

            </ul>
            <h4>
                Sugerencias:
            </h4>
            <ul>
            <li>Crear el estado de las tareas en App.jsx para que se facilite el pasaje entre componentes.</li>

            <li>Crear un componente tipo lista que nos muestre todas las tareas de una lista.</li>

            <li>Crear un componente que nos permite agregar una nueva tarea.</li>
            </ul>
        </>
    )
}

export default Consigna