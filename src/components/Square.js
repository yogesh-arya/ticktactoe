import React from 'react'
export default function Square({id,squares,handleUserClick}) {
    const imgPath = "images/"
    function buttonClicked(id){
      handleUserClick(id);
    }
  return (
    <button onClick={()=>buttonClicked(squares.id)} className='square'>
<img alt="myimage" src={`${imgPath}${squares.image}`}/>
    </button>
  )
}