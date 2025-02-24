import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="Logo" />
          <p>Baseco Port Area Compound Manila, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privary Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Baseco Compound Manila</p>
          <p>+639055795637</p>
          <p>delmankeithandrew@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
      <p>Copyright © 2021 Baseco Port Area Compound Manila, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
