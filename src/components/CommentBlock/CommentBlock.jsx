import React from 'react'
import "./CommentBlock.css"
import Star from "../../assets/icons/Star.svg"

export default function CommentBlock({ name, age, rating, text }) {
  return (
    <div className="comment_block">
      <div className="comment_header">
        <h3>{name}, {age} лет</h3>
        <div className="comment_stars">
          {[...Array(rating)].map((_, i) => (
            <img key={i} src={Star} alt="star" className="star_icon"/>
          ))}
        </div>
      </div>
      <p className="comment_text">{text}</p>
    </div>
  )
}
