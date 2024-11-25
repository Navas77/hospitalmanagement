import React, { useContext } from 'react'
import {assets} from "../assets/assets"
import { Admincontext } from '../context/Admincontext'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Doctorcontext } from '../context/Doctorcontext'

function Navbar() {
  const navigate = useNavigate()
  const {aToken,setAToken} = useContext(Admincontext)
  const {dToken,setDToken} = useContext(Doctorcontext)
   
  const logout = ()=>{
    navigate('/')
    aToken && setAToken("")
    aToken && localStorage.removeItem("aToken")
    dToken && setDToken("")
    dToken && localStorage.removeItem("dToken")

  }



  return (
    <div className='nvbrdiv1'>
        <div className='nvbr2'>
            <img  className="container4" src={assets.admin_logo} alt=""/>
            <p className="container5">  {aToken ? "admin" : "Doctor"}</p>
        </div>
        <button onClick={logout}className="container6button">Logout</button>
    </div>
  )
}

export default Navbar