import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter] = useState(5);
  
  // let counter = 15;
  function addValue(){
    // if(counter<20)counter  = counter + 1;
    setCounter(prevCounter => prevCounter +1);
    // setCounter(prevCounter => prevCounter +1);
    // setCounter(prevCounter => prevCounter +1);
    // setCounter(prevCounter => prevCounter +1);
    // console.log(counter);
  }
    {/* <p>footer : {counter}</p> */}
  function removeValue(){
    // if(counter>0)counter  = counter - 1;
    setCounter(prevCounter => prevCounter -1);
    // setCounter(prevCounter => prevCounter -1);
    // setCounter(prevCounter => prevCounter -1);
    // setCounter(prevCounter => prevCounter -1);
    // console.log(counter);
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    {/* <p>footer : {counter}</p> */}
    <button onClick={removeValue}>Remove Value</button>
    {/* <p>footer : {counter}</p> */}
    </>
  )
}

export default App
