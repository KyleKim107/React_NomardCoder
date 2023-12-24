import './App.css';
import {useState, useEffect} from "react"


function App() {
  const [toDo,setTodo]= useState("");
  const onChange = (event) => setTodo(event.target.value);
  const [toDos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return;
    }
    setTodo("");
    setTodos(currentArray => [toDo, ...currentArray]);
  }
  console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="write what you want to do"></input>
          <button>Add To do </button>
      </form>
    </div>
  );
}

export default App;
