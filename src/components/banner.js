import React from 'react'
import '../styles/banner.scss'
import { Link } from 'gatsby'
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-heading">
        India's Fastest Agricultural Supply Chain.
      </div>
      <div className="banner-text">
        We deliver the freshest produce & milk in India. From farm to table.
      </div>
      <Link to="#" className="banner-btn">
        Learn More
      </Link>
    </div>
  )
}
