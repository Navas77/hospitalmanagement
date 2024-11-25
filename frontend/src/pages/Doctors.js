import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import App from '../App'
import { Appcontext } from '../Context/Appcontext'
import { doctors } from '../assets/assets'
import './Doctor.css'

function Doctors() {

  const navigate = useNavigate()
  const { speciality } = useParams()
  const [filterDoc,setFilterDoc]=useState([])
  const {doctors} = useContext(Appcontext)
const applyfilter = () => {
  if (speciality){
    setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
}else{
    setFilterDoc(doctors)
}
}

useEffect(()=>{
 applyfilter()
},[doctors,speciality])
  
  return (
    <div className=''>
      <p className='browsethrough'>Browse through the doctors specialist.</p>
      <div className='subdivdoctors2'>
        <div className='sub3div'>
          <p onClick={()=> speciality === "General physician" ? navigate('/doctors') : navigate('/doctors/General physician')}className='paragraphspeciallist'>General physician</p>
          <p onClick={()=> speciality === "Gynecologist" ? navigate('/doctors') : navigate('/doctors/Gynecologist')}className='paragraphspeciallist'>gynecologist</p>
          <p onClick={()=> speciality === "Dermatologist" ? navigate('/doctors') : navigate('/doctors/Dermatologist')}className='paragraphspeciallist'>Dermatologist</p>
          <p onClick={()=> speciality === "Pediatricians" ? navigate('/doctors') : navigate('/doctors/Pediatricians')}className='paragraphspeciallist'>Pediatricians</p>
          <p onClick={()=> speciality === "Neurologist" ? navigate('/doctors') : navigate('/doctors/Neurologist')}className='paragraphspeciallist'>Neurologist</p>
          <p onClick={()=> speciality === "Gastroenterologist" ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}className='paragraphspeciallist'>Gastroenterologist</p>
          </div>
          < div className=''>
            {
              filterDoc.map((item,index)=>(
                <div  onClick={()=>navigate(`/appointment/${item._id}`)} className="keyindexdoctor" key={index}>
                   <img className='imgsrcitemimage' src={item.image}  alt=''/>
                   <div className='availablediv'>
                    <div className='availablediv2'>
                        <p className='availablep'></p><p>Available</p>
                    </div >
                    <p className='item-name'>{item.name}</p>
                    <p className='item-speciality'>{item.speciality}</p>
                   </div>
                </div>
            ))
            }
          </div>
      </div>
    </div>
  )
}

export default Doctors