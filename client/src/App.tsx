import { useState } from "react";

const Child = ({state}:any) => {
  return <button type="button">{state}</button>
};

const App = () => {
  const [number1,setNumber1]=useState(0);
  const [number2,setNumber2]=useState(0);

  const HandleChange = () => {
    setNumber1((prev)=>prev+2);
    setNumber2((prev)=>prev+3);
  };

  return(
    <div>
      <Child state={number1} />
      <Child state={number2} />
      <button onClick={HandleChange}>Change</button>
    </div>
  );
};

export default App;