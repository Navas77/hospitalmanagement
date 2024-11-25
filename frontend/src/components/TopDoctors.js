import React, { useContext } from 'react'
import { doctors } from '../assets/assets'
import './TopDoctors.css';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/Appcontext';
  

function TopDoctors() {


  const navigate = useNavigate()
  const {doctors} = useContext(Appcontext)
  return (
    <div className='topdoctorstobook'>
        <h1 className='topdoctorsh1'>Top Doctors To Book</h1>
        <p className='simplybrowsep'>simply browse through our extensive list of trusted doctors.</p>
        <div className='doctorsdiv'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className="keyindexdoctor" key={index}>
                   <img className='imgsrcitemimage' src={item.image}  alt=''/>
                   <div className='availablediv'>
                    <div className='availablediv2'>
                        <p className='availablep'></p><p>Available</p>
                    </div >
                    <p className='item-name'>{item.name}</p>
                    <p className='item-speciality'>{item.speciality}</p>
                   </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); window.scrollTo(0,0)}} className='buttonmore'>More</button>
    </div>
  )
}

export default TopDoctors