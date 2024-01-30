import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addToDo}) => {

    const handleChange = e => {

        const {name,type, checked,value} = e.target;

        setToDo({
            ...toDo, [name]: type === "checkbox" ? checked : value
        })
    }

    const [toDo, setToDo] = useState({
        title: 'Tarea #01',
        descr: 'Descripción #01',
        state: 'pendiente',
        priority: true
    });

    const {title, descr, state, priority} = toDo;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim() || !descr.trim()){
            return Swal.fire({
                icon:"error",
                title:"Oops...",
                text: "Nombre y descripción obligatorios"
            })
        }
        
        addToDo({
            id: Date.now(),
            ...toDo,
            state: state === "completado"
        })

        Swal.fire({
            position: "center",
            icon:"success",
            title: "Tarea guardada exitosamente!",
            showConfirmButton: false,
            timer: 1500
        })

    };

    return (
        <form onSubmit={handleSubmit}>
           <h6 className="mt-2 text-secondary">Nombre:</h6>
            <input
                type="text"
                placeholder="Nombre de la tarea"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}
                maxLength={50}/>

            <h6 className="mt-2 text-secondary">Descripción:</h6>
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese una descripción"
                name="descr"
                value={descr}
                onChange={handleChange} 
                maxLength={200}/>

            <div className="form-check mb-2">
                <input type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange} />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <h6 className="mt-2 text-secondary">Estado:</h6>
            <select
                className="form-select mb-2"
                name="state"
                value={state}
                onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <div className="text-center mt-4">
            <button type="submit" className="btn btn-outline-primary rounded-4">
                Agregar Tarea
            </button>
            </div>
        </form>
    )
}
export default Formulario