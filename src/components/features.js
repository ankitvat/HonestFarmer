import React, { useState } from 'react'
import '../styles/features.scss'

const texts = [
  ' Our produce is grown from the best varieties of seed, and irrigated with clean ground water. We work with farmers who follow cutting-edge farming techniques. The best of thier harvest is delivered to you, free from any pesticide residue.',
  'A QR code on the packaging tells you where your product came from, and how long it took to reach you.',
  'All items with a short shelf life are procured after we receive orders. Because we take the guesswork out of consumer demand, we never end up with more than we can sell. The result? Zero waste.',
]

const classes = ['green', 'blue', 'red']

export default function Test() {
  const [hovered, setHovered] = useState(-1)

  return (
    <>
      <div className={`landing-control ${classes[hovered]}`}>
        <div className="landing-intro">
          <div className="intro-content">
            <div
              className="hovertext"
              role="presentation"
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(-1)}
            >
              <p>Progressive Farmers.</p>
            </div>
            <div
              className="hovertext"
              role="presentation"
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(-1)}
            >
              Tracable Food.
            </div>
            <div
              className="hovertext"
              role="presentation"
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(-1)}
            >
              Zero Waste
            </div>
          </div>
        </div>
        <div className="landing-ad">
          <div className="ad-image">
            {hovered === -1 ? (
              <div className="image-block">
                <h1 className="img-h1">
                  Farmed <br></br>Thoughtfully.
                </h1>
              </div>
            ) : (
              <div className="text">
                <p>{texts[hovered]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
