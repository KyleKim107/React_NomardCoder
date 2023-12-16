import './App.css';
import {useState, useEffect} from "react"

function Hello(){
  function hiFn(){
    console.log("Created :)");
    return byeFn;
  }
  function byeFn(){
    console.log("Bye :(");
  }
  useEffect(hiFn, [])

  return <h1>Hello</h1>;
}

function App() {
  const [showing , setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev)
  }

  return (
    <div>
      {showing? <Hello/> : null}
      <button onClick={onClick}>{showing? "Hide":"Show"}</button>
    </div>
  );
}

export default App;
