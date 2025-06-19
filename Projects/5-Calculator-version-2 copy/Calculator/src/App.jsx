import { useState } from 'react'
import Display from './Components/display'
import Buttons from './Components/Buttons'
import './App.css'

function App() {
  let OnButtonClick = (buttonText)=>{
    if(buttonText==='C'){
      setVal('');
    }else if(buttonText==='='){
      setVal(eval(val))
    }else{
      setVal(val+buttonText);
    }
  }

  const [val, setVal] = useState("");
  return (
   <div className="calculator">
   <Display displayVal = {val}/>    
   <Buttons OnButtonClick={OnButtonClick}/>
   </div>
  )
}

export default App
