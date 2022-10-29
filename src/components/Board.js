import React, { useEffect } from 'react'
import Square from './Square'
export default function Board({allSquares,handleUserClick}) {
  return (
  <div className='grid'>
  {allSquares.map((squares,index)=>{return <Square  key={index} id={index} squares={squares} handleUserClick={handleUserClick}/>})}
      </div>
  )
}
