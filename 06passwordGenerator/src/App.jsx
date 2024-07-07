import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed , setNumsAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  // Use Ref
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "";
    for(let i = 65 ; i<=122; i++){
      if(i>90 && i<97) continue;
      str += String.fromCharCode(i);
    }

    if(numsAllowed) str += "0123456789";
    if(charAllowed){
      for(let i = 33 ; i<48; i++){
        str += String.fromCharCode(i);
      }
    }

    for(let i = 1 ; i<= length ; i++){
      let char = str.charAt(Math.floor((Math.random()*str.length) + 1));
      pass += char;
    }

    setPassword(pass);

  }, [length,numsAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()
  }, [length,numsAllowed, charAllowed, passwordGenerator]);



  const copyPasswordToClipboard = useCallback (() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  } , [password])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-gray-200'>
        PASSWORD GENERATOR

        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 text-orange-500">
            <input type="text" value={password} className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}/>
            
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'></div>
            <input 
            type="range"
            min={6} 
            max={100}
            value={length}
            className='curser-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label > Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numsAllowed}
          id="numberInput"
          onChange={()=>{
            setNumsAllowed((prev)=> !prev);
          }}  
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }} 
          />
          <label htmlFor="characterInput">Characters</label>

        </div>

      </div>
  )
}

export default App