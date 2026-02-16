import React from 'react'
import "./GlowingBackground.css"
import DarkBlueGlowing from "../../assets/images/DarkBlueGlowing.svg"
import LightBlueGlowing from "../../assets/images/LightBlueGlowing.svg"
import SkyBlueGlowing from "../../assets/images/SkyBlueGlowing.svg"

export default function GlowingBackground() {
  return (
    <div className="GlowingBackground">
      <img src={DarkBlueGlowing} className="backgorund-element dark-blue-element" alt=""/>
      <img src={SkyBlueGlowing} className="backgorund-element sky-blue-element" alt=""/>
      <img src={LightBlueGlowing} className="backgorund-element light-blue-element" alt=""/>
    </div>
  )
}
