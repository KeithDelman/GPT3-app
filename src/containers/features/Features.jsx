import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData =[
  {
  title: 'Improving end distrust instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
      title: 'Message or am nothing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Really boy law country',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Feature is Now and You Just Need To Realize It. Step into Future Today & Mkae It Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Feature title = {item.title} text = {item.text} key={item.title +index}/>
        ))}

      </div>

    </div>
  )
}

export default Features
