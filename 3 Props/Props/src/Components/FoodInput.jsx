import React from 'react'

function FoodInput({getValue}) {
  return (
    <div>
        <input type='text' placeholder='Enter Food Item ' onKeyDown={getValue}/>
    </div>
  )
}

export default FoodInput