import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Posibilites are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title = "Chatbots" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
        <Feature title = "Knowledgebase" text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <Feature title = "Education" text= "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
      </div>
    </div>
  )
}

export default WhatGPT3
