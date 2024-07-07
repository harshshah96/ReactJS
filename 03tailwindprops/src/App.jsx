import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let  myObj = {
    username : "hitesh",
    age : 21
  }
  let newArr = [1,2,3];

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 mb-4'>TailWind Test</h1>
      <Card username="Harsh" btntext="Click me"/>
      <Card username="Hitesh" btntext="Visit me"/>
      <Card username="Sam" b/>
    </>
  )
}

export default App
