import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black mb-4 p-4 rounded-xl'>TAILWIND TEST</h1>
     <Card username="nature1" btnText="click me"/>
     <Card username="RIDDHI" btnText="read me" />
     
    </>
  )
}

export default App
