import { useState } from "react";

const Child = ({state,action}:any) => {
  return <button type="button" onClick={action}>{state}</button>
}

const App = () => {
  const [number,setNumber]=useState(0);
  const increase = () => setNumber(number+1);

  return(
    <Child state={number} action={increase}/>
  );
}

export default App;