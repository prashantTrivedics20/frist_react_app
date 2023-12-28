import React from 'react'

function List(props) {
    let items=["pen","pencil","eraser"]
    // convert array of data => array of list
    let arroriginal=items.map((item,idx)=>
        {
            return <li key={idx}>{item}</li>// key props
        })
  return (
    <>
       <div>List</div>
       <ul>
        {arroriginal}
       </ul>
        
    </>
   
  )
}

export default List