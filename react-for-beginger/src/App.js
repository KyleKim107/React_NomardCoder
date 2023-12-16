import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import {useState, useEffect} from "react"

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev)=> prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() =>{ // this log printed out only once because the second parameter(dependency) is empty
    console.log("I run only once")
  },[])
  useEffect(() =>{ // print every time whenever we input.
    console.log("I run when 'keyword' changes")
  }, [keyword]);
  useEffect(() =>{
    console.log("I run when 'counter' changes")
  }, [counter]);
  useEffect(() =>{ // 디펜던시 둘중 하나 바뀌면
    console.log("I run when 'counter & keyword' changes")
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
