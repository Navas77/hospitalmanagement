import React from 'react'
import { assets } from '../assets/assets'
import './Banner.css'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate=useNavigate();
  return (
    <div  className='leftbanner'>
        {/*--leftside--*/}

     <div className='withleft'>
<div className='parabook'>
    <p>Book Appointment</p>
    <p className='with100'>With 100+ Trusted Doctors </p>
</div>
<button onClick={()=>{navigate('/login'); window.scrollTo(0,0)}} className='buttoncreate'>create Account</button>
    </div>
 {/*--rightside--*/}
<div className='rightsidebanner'>
<img className="imgrightsidebanner"src={assets.appointment_img} alt=""/>
</div>
        </div>
  )
}

export default Banner