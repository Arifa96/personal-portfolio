import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='footer-content'>
          <p>@shamsul alam</p>
      </div>
      <div className='footer-social-media'>
      <Link to="https://facebook.com" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <i class="fa-brands fa-instagram"></i>
       </Link>
      </div>
    </div>
  )
}

export default Footer