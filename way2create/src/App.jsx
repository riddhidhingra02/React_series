
import Chai from "./Chai"

function Myapp(){
  const username="riddhi"
  return (
    <div>
      <h1>hey my name is {username}</h1>
    </div>
  )
}
function App() {
  

  return (
  //  <h1>chai aur react with vite</h1>
  <>
  
  <Myapp/>
  <Chai/>
  </>
  )
}

export default App
