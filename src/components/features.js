import React from 'react'
import '../styles/features.scss'
import { Link } from 'gatsby'

export default function Features() {
  return (
    <div className="features">
      <div className="section">
        <h1>Progressive Farmers</h1>
        <p>
          Our produce is grown from the best varieties of seeds, and irrigated
          with clean ground water. We work with farmers who follow cutting-edge
          farming techniques. The best of their harvest is delivered to you,
          free from any pesticide residue. Our desi cows are free-range, grain &
          grass-fed, and raised in cruelty-free pastures. Their calves get their
          fair share of milk before we collect yours.
        </p>
        <Link to="#" className="features-btn">
          Learn More
        </Link>
      </div>
      <div className="section">
        <h1>Tracable food</h1>
        <p>
          A QR code on the packaging tells you where your product came from, and
          how long it took to reach you.
        </p>
      </div>
      <div className="section">
        <h1>Zero waste</h1>
        <p>
          All items with a short shelf life are procured after we receive
          orders. Because we take the guess work out of consumer demand, we
          never end up with more than we can sell. The result? Zero waste.
        </p>
      </div>
      <div className="section">
        <h1>Vedic practices</h1>
        <p>
          Our authentic Ayurvedic products are hand-crafted in Indian villages,
          using traditional vedic recipes. Try our Bilona Ghee. Hand-churned
          over low heat from probiotic curd, it retains most of its natural
          nutrients.
        </p>
      </div>
      <div className="section">
        <h1>Relationship Manager</h1>
        <p>
          When you buy from us, you get an advocate within the company. To root
          for you & solve your problems. Think of your Relationship Manager as
          your voice at Honest Farmer.
        </p>
      </div>
      <div className="section">
        <h1>Seasonal produce</h1>
        <p>
          We don’t believe in cold storage. Flash-frozen veggies may be just as
          nutritious as freshly-harvested ones, but they’re completely sapped of
          their life force (sattva). If you’ve tasted both fresh peas & frozen
          ones, you’ll know what we’re talking about. Sattvic food is, above
          all, fresh. We bring to you the unforgettable feeling of biting into
          fresh plant tissue
        </p>
      </div>
    </div>
  )
}
