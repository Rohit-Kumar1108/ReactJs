import React from 'react'

function Display({displayVal}) {
  return (
     <input className="display" type='text' readOnly value={displayVal}/>
  )
}

export default Display