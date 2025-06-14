import React from 'react'

function Buttons() {
    const buttonsNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
   <div className="button-contener">
      {buttonsNames.map(button=><button className='btn'>{button}</button>)}
    </div>
  )
}

export default Buttons