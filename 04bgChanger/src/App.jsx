import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
    <h1>Hi there</h1>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor : color}}
      ></div>
    </>
  )
}

export default App;