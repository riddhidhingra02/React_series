import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let counter=5
const addValue=()=>{
  counter=counter+1
  console.log("value added",counter)
}
// removeValue=()=>{
//   counter=counter-1
//   console.log("clicked")
// }
  return (
    <>
    <h1>
      HEY i m riddhi
    </h1>
    <h2>
      counter value: {counter}
    </h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button >Remove value</button>

    </>
  )
}

export default App
