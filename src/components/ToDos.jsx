import ToDo from "../components/ToDo";

const ToDos = ({todos, deleteToDo, updateToDo}) => {
    return (
        <div className="m-4 rounded-5 p-4 border border-secondary">
            <h2 className="text-center mb-4 text-primary">Listado de Tareas</h2>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <ToDo key={todo.id} todo={todo} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
                    ))
                }
            </ul>
            {
                todos.length === 0 && <div className="text-center container p-4">
                    <li className="list-group-item text-center fs-4 text-secondary">Sin tareas de momento</li>
                    </div>
            }
        </div>
    )
}

export default ToDos