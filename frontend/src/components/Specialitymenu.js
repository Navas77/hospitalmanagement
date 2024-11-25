import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import './Speciality.css'
function Specialitymenu() {
  return (
    <div className="findbyspeciality"id="speciality">
        <h1 className='findbyspecialityh1'>Find by speciality</h1>
        <p className='paragraphfindby'>browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='specialitydatadiv'>
           {specialityData.map((item,index)=>(
            <Link onClick={()=>window.scrollTo(0,0)} className="linkkeyindex" key={index} to={`/doctors/${item.speciality}`}>
              <img className='itemimage' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
           ))}
        </div>
    </div>
  )
}

export default Specialitymenu