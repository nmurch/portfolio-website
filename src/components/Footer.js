import React from 'react'
import './styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='socials-wrapper'>
          <div className='social-icons'>
            <Link
              className='social-icon-link linkedIn'
              to='https://www.linkedin.com/in/nicole-murch/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              className='social-icon-link github'
              to='https://github.com/nmurch'
              target='_blank'
              aria-label='GitHub'
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/nicolemmurch?igsh=YTQwZjQ0Nml0OA%3D%3D&utm_source=qr'
              target='_blank'
              aria-label='Instagram'
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
        <small className='website-rights'>Nicole Murch © 2024</small>
    </div>
  )
}

export default Footer