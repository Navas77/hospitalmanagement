import React from 'react'
import { assets } from '../assets/assets'
import "./Header.css"

function Header() {
  return (
    <div className='headerfile'>
    {/*------left side---*/}
        <div className='leftside'>
<p className='ptagforbookappointment'>
    Book Appointment<br/>
     with trusted Doctors
</p>
<div className='imageassests'>
    <img className="imageassets2" src={assets.group_profiles} alt=""/>
    <p>simply browse through our extensive list of trusted doctors,<br className='brtag'/>
        schedule your appointment hassle-free
    </p>
</div>
<a href='#speciality' className='bookappointment'>book Appointment <img className='bookappointmentimg' src={assets.arrow_icon} alt=""/></a>
        </div>
        {/*----rightside----*/}
       <div className='rightside'>
          <img className='rightsideimg' src={assets.header_img} alt="" />
       </div>

    </div>
  )
}

export default Header