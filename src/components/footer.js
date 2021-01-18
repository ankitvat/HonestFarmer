import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter'
import { AiOutlineCopyright } from '@react-icons/all-files/ai/AiOutlineCopyright'
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight'
import logo from '../images/logo.png'
import oldlogo from '../images/oldlogo.png'
export default function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={logo} className="toplogo" alt="oldlogo" />
        <img src={oldlogo} className="botlogo" alt="botlogo" />
        <div className="go4lifelink">
          <Link to="#" className="link">
            Check it out
          </Link>
          <BsArrowRight className="arrow" />
        </div>
      </div>
      <div className="right-footer">
        <div className="footer-links">
          <h1 className="footer-heading">Navigation</h1>
          <Link to="#">Our Journey</Link>
          <Link to="#">Products</Link>
          <Link to="#">Stories</Link>
        </div>
        <div className="footer-links">
          <h1 className="footer-heading">Company</h1>
          <Link to="#">Terms Of Use</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
      </div>
      <div className="socials">
        <div className="social-heading">
          <h1>Follow us </h1>
        </div>
        <div className="social-links">
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
          <div className="social-footer">
            <AiOutlineCopyright className="icon" /> <h1>2021 Honest Farmer</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
