const ToDo = ({ todo, deleteToDo, updateToDo}) => {

    const { title, descr, state, priority, id } = todo

    return (
        <li className="list-group-item rounded-3 mb-2 p-4">
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-column align-items-start">
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{descr}</p>
                    <div className="d-flex gap-2">
                        <button onClick={() => deleteToDo(id)} 
                        className="btn btn-outline-danger btn-sm rounded-3">Eliminar</button>
                        <button 
                        onClick={() => updateToDo(id)} 
                        className="btn btn-outline-success btn-sm rounded-3">
                        Cambiar a {`${todo.state === true ? "Pendiente" : "Completado"}`}
                        </button>
                    </div>
                </div>
                <span className="badge text-bg-primary">
                    {priority && "Prioritario"}
                </span>
            </div>
        </li>
    )
}

export default ToDo