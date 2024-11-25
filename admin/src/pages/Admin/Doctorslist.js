import React, { useContext, useEffect } from 'react'
import { Admincontext } from '../../context/Admincontext'
import './Doctorlist.css'

function Doctorslist() {
  const {doctors,aToken,getAllDoctors,changeAvailability} = useContext(Admincontext)

  useEffect(()=>{
      if(aToken){
        getAllDoctors()
      }
  },[aToken])
  return (
    <div className='w' >
      <h1 className='a' >All Doctors</h1>
      <div className='b' >
        {
          doctors.map((item,index)=>(
            <div className='d'  key={index}>
             <img className='e'  src={item.image} alt=""/> 
             <div className='' >
              <p className='' >{item.name}</p>
              <p className='' >{item.speciality}</p>
              <div className='' >
                <input className='' onChange={()=>changeAvailability(item._id)} type='checkbox' checked={item.available}/>
                <p className='' >available</p>
                </div>
              </div>
              </div>
          ))
        }
      </div>
      
      </div>
  )
}

export default Doctorslist