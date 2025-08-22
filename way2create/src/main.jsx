import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react' 
import App from './App.jsx'
const name="rid"
const Reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const another=(<a href="https://google.com" target="_blank">visit google</a>)
const reeact=React.createElement("a", 
  {href:'https://google.com' ,target:'_blank'},
  'click me to visit google',
name)
createRoot(document.getElementById('root')).render(
  
    // another
    // reactelement does not work
    <>
    {reeact}
    <App />
  </>

  
)
