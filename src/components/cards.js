import React from 'react'
import '../styles/cards.scss'

export default function Cards() {
  return (
    <div className="cards">
      <div className="upper-cards">
        <div className="card1">Card1</div>
        <div className="card2">Card2</div>
      </div>
      <div className="lower-cards">
        <div className="card3">Card3</div>
        <div className="card4">Card4</div>
      </div>
    </div>
  )
}
