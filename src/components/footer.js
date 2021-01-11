import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="#">Our Journey</Link>
        <Link to="#">Products</Link>
        <Link to="#">Stories</Link>
        <Link to="#">Contact</Link>
      </div>
      <div className="footer-links">
        <Link to="#">Terms of Use</Link>
        <Link to="#">FAQ</Link>
        <Link to="#">Privacy Policy</Link>
      </div>
      <div className="socials">
        <Link to="#">Instagram</Link>
        <Link to="#">Facebook</Link>
        <Link to="#">Linkedin</Link>
        <Link to="#">Twitter</Link>
      </div>
    </div>
  )
}
