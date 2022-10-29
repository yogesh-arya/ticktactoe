import React from 'react'

export default function Result({resultImage}) {
    const imgPath = "images/"
  return (
    <div className='result'><img alt="myimage" src={`${imgPath}${resultImage}`}/></div>
  )
}
