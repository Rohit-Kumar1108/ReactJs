import React from 'react'

function TodoListItem() {
  return (
   <>
      <div className="row">
        <div className="col-5">Buy Milk</div>
         <div className="col-4">4/10/2025</div>
        <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
      </div>

      <div className="row">
       <div className="col-5">Go to College</div>
         <div className="col-4">4/10/2025</div>
        <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
      </div>
      </>
  )
}

export default TodoListItem