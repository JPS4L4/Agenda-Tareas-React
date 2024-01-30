import Formulario from "./components/Formulario";
import {useEffect, useState} from "react"
import ToDos from "./components/ToDos";

const initialStateToDo = JSON.parse(localStorage.getItem('toDos')) || [];

const App = () => {

  const [toDos, setToDos] = useState(initialStateToDo);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  },[toDos])

  const addToDo = toDo => {
    setToDos((prev) => [...prev,toDo])
  }

  const deleteToDo = id => {
    const newArray = toDos.filter(toDo => toDo.id !== id)
    setToDos(newArray)  
  }

  const updateToDo = id => {

    const newArray = toDos.map(toDo => {
      if(toDo.id === id){
        toDo.state = !toDo.state
      }
      return toDo
    })

    setToDos(newArray)
  }

  const orderToDo = arrayToDos => {
    return arrayToDos.sort((a,b) => {
      if(a.prority === b.prority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }

  return(
    <div className="container mb-2 px-4">
      <h1 className="my-5 text-center text-primary">Agenda De Tareas</h1>
      <Formulario addToDo={addToDo}/>
      <ToDos todos={orderToDo(toDos)} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
      <h4 className="fs-5 text-center text-secondary m-4">Juan Pablo Salazar Ceballos || 2024</h4>
    </div>
  )
}

export default App;