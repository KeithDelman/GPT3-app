import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request for Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilites are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <h4>Request for Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
