import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
//  let counter=5
const addValue=()=>{
  // counter=counter+1  
   setCounter(counter+1)

}
const removeValue=()=>{
  counter=counter-1
  if(counter>0)
  setCounter(counter)
else{
  console.log("cant move less than zero")
}
  
}
  return (
    <>
    <h1>
      HEY i m riddhi
    </h1>
    <h2>
      counter value: {counter}
    </h2>
    <button onClick={addValue}>Add value{counter}</button>
    <br />
    <button onClick={removeValue} >Remove value{counter}</button>
 <p>footer:{counter}</p>
    </>
  )
}

export default App
