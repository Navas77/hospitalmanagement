import React from 'react'
import { assets } from '../assets/assets'
import './About.css'

function About() {
  return (
    <div>
      <div className='aboutus'>
        <p>ABOUT<span className='us'>US</span></p>
      </div>
      <div className='aboutpara'>
       <img src={assets.about_image} alt=""/> 
      </div>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
        <b>our vison</b>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
      </div>
    </div>
  )
}

export default About