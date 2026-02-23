import React from 'react'
import Star from "@assets/images/Star.png"
export default function Stars({amount = 0}) {
  return (
    <div className='Stars'>
      <img 
      width="50px" 
      src={Star} 
      alt="star"/>
      <p>{amount}</p>
    </div>
  )
}
