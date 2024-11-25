// import React,{useState}from 'react'
// import {assets} from '../assets/assets';
// import { NavLink, useNavigate } from 'react-router-dom';
// import "../pages/Navbar.css";
// function Navbar() {
//    const[showMenu,setShowMenu] = useState(false)
//    const[token,setToken]=useState(true)
//   const navigate= useNavigate();
//   return (
    
//     <div className='navbar'>
//     <img onClick={()=>navigate("/")} className="logo" src={assets.logo} alt=""/>
//      <ul className='ul'>
      
//         <NavLink to="/">
//             <li className='li'> Home</li>
//             <hr className="hraaa"/>

//         </NavLink>
//         <NavLink to="/doctors">
//             <li className='li'>All Doctors</li>
//             <hr className='hraaa' />
            
//         </NavLink>
//         <NavLink to="/about">
//             <li className='li'>About</li>
//             <hr className="hraaa"/>
            
//         </NavLink>
//         <NavLink to="/contact">
//             <li className='li'>Contact</li>
//             <hr className="hraaa"/>
            
//         </NavLink>
        
//      </ul>
//      <div className='buttondiv'>
//       {
//         token ? <div className='profileimgdiv'>
//           <img className='profileimg' src={assets.profile_pic} alt=''/>
//           <img className="profileicon"src={assets.dropdown_icon} alt=''/>
//           <div className='dropdown'>
//             <div className="dropdownp">
//               <p onClick={()=>navigate("my-profile")}className="dropdownparagraph">My profile</p>
//               <p onClick={()=>navigate("my-appointments")}className="dropdownparagraph">Myappointment</p>
//               <p onClick={()=>setToken(false)}className="dropdownparagraph">Logout</p>
//             </div>
//           </div>
//         </div>
//         :<button onClick={()=>navigate("/login")}   className='button'>Create Account</button>
        

//       }
     
//      </div>
//     </div>
    
   
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import '../pages/Navbar.css';
import { Appcontext } from '../Context/Appcontext';

function Navbar() {
  const {token,setToken,userData} = useContext(Appcontext)
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();


  const logout = () =>{
    setToken(false)
    localStorage.removeItem("token")
  }

  return (
    <div className='navbar'>
      <img onClick={() => navigate('/')} className="logo" src={assets.logo} alt="" />
      <ul className='ul'>
        <NavLink to="/">
          <li className='li'>Home</li>
          <hr className="hraaa" />
        </NavLink>
        <NavLink to="/doctors">
          <li className='li'>All Doctors</li>
          <hr className='hraaa' />
        </NavLink>
        <NavLink to="/about">
          <li className='li'>About</li>
          <hr className="hraaa" />
        </NavLink>
        <NavLink to="/contact">
          <li className='li'>Contact</li>
          <hr className="hraaa" />
        </NavLink>
      </ul>
      <div className='buttondiv'>
        {token  && userData ?
          <div className='profileimgdiv'>
            <img className='profileimg' src={userData.image} alt='' />
            <img className="profileicon" src={assets.dropdown_icon} alt='' />
            <div className='dropdown'>
              <div className="dropdownp">
                <p onClick={() => navigate('my-profile')} className="dropdownparagraph">My Profile</p>
                <p onClick={() => navigate('my-appointments')} className="dropdownparagraph">My Appointments</p>
                <p onClick={logout} className="dropdownparagraph">Logout</p>
              </div>
            </div>
          </div>
         : 
          <button onClick={() => navigate('/login')} className='button'>Create Account</button>
        }
      </div>
    </div>
  );
}

export default Navbar;
