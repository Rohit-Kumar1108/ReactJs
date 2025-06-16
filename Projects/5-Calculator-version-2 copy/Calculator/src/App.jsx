import { useState } from 'react'
import Display from './Components/display'
import Buttons from './Components/Buttons'
import './App.css'

function App() {
  let OnButtonClick = (e)=>{
    console.log(e.target.data);
  }

  const [val, setVal] = useState("1234");
  return (
   <div className="calculator">
   <Display displayVal = {val}/>    
   <Buttons OnButtonClick={OnButtonClick}/>
   </div>
  )
}

export default App
