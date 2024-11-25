import React from 'react'
import './Contact.css'
import { assets } from '../assets/assets'
function Contact() {
  return (
    <div className='contact'>
      <p>CONTACT <span>US</span></p>
      <div className='contactus'>
    <img className="contactimage" src={assets.contact_image} alt=""/> 
    <div className='ouroffice'>
   <p>OUR OFFICE</p>
   <p>DASH</p>
   <p>9999999999</p>
   <p>CAREES@2222</p>
   <p>lllllllllllllllllll</p>
   <button>Explore jobs</button>
</div>
      </div>
      
    </div>
  )
}

export default Contact