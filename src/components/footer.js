import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter'

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
        <Link to="#">
          <AiOutlineFacebook />
        </Link>
        <Link to="#">
          <AiOutlineInstagram />
        </Link>
        <Link to="#">
          <AiOutlineLinkedin />
        </Link>
        <Link to="#">
          <AiOutlineTwitter />
        </Link>
      </div>
    </div>
  )
}
