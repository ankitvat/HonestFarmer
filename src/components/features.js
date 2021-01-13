import React, { useState } from 'react'
import '../styles/features.scss'

const texts = [
  ' Our produce is grown from the best varieties of seed, and irrigated with clean ground water. We work with farmers who follow cutting-edge farming techniques. The best of thier harvest is delivered to you, free from any pesticide residue.',
  'Quisque iaculis, odio quis lacinia vulputate, ligula metus vehicula arcu, sit amet iaculis enim leo in ligula. Vivamus condimentum finibus tortor, vel dapibus ex ultrices sit amet. Cras non mauris sed nisi viverra imperdiet. Ut aliquam tincidunt felis ut dictum. Curabitur ut tempus nulla. Proin at eleifend neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tristique, enim et consectetur sodales, felis massa ultricies lectus, quis porta nunc enim non libero. ',
  'Sed pellentesque dolor at consequat lobortis. Phasellus sollicitudin congue dui sit amet mollis. Quisque non lacus eu metus porta bibendum vitae et tellus. Proin ultricies odio lectus, id pulvinar neque volutpat id. Pellentesque vulputate lacinia elit, quis tincidunt turpis auctor at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vel orci sed purus rutrum tincidunt in vitae nisi. Duis dapibus aliquam sem, quis maximus orci faucibus eget. ',
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
              Fresh apples, from the land of Karan Chauhan
            </div>
            <div
              role="presentation"
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(-1)}
            >
              Hassle free. Free Delivery at your door step
            </div>
            <div
              role="presentation"
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(-1)}
            >
              Pesticides and chemicals free
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
              <p className="image-text">{texts[hovered]}</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
