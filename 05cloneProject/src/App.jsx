import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    
      <div className="w-full h-full duration-200"
      style = {{backgroundColor : color}}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setColor("red")}
          className="outline-none px-4 rounded-full text-white
          shadow-lg"
          style={{backgroundColor: "red"}}> </button>
          <button className="outline-none px-4 rounded-full text-white
          shadow-lg"
          style={{backgroundColor: "blue"}}> </button>
          <button className="outline-none px-4 rounded-full text-white
          shadow-lg"
          style={{backgroundColor: "green"}}> </button>
         </div>
      </div>
    </>
  )
}

export default App;