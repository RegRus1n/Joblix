import React from 'react'
import './ArrowButton.css'
import RightButtonSimul from "../../../../assets/icons/rightarrowsimul.svg"

export default function ArrowButton({ side = 'right', disabled = false, onClick }) {
  return (
    <button
      className={`ArrowButton ${side === 'left' ? 'ArrowButton--left' : ''} ${disabled ? 'ArrowButton--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={RightButtonSimul} alt={`${side} arrow`} className="ArrowButton__icon" />
    </button>
  )
}
