import React, { useContext } from 'react';
import { Admincontext } from '../context/Admincontext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import "./Sidebar.css";
import { Doctorcontext } from '../context/Doctorcontext';

function Sidebar() {
  const { aToken } = useContext(Admincontext);
  const {dToken} = useContext(Doctorcontext)
  return (
    <div className='sidebar11'>
      {aToken && (
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/admin-dashboard"}
          >
            <img src={assets.home_icon} alt="Home" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointment</p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/add-doctor"}
          >
            <img src={assets.add_icon} alt="Add Doctor" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/doctor-list"}
          >
            <img src={assets.people_icon} alt="Doctors List" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}

{dToken && (
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/doctor-dashboard"}
          >
            <img src={assets.home_icon} alt="Home" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/doctor-appointments"}
          >
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointment</p>
          </NavLink>

        

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={"/doctor-profile"}
          >
            <img src={assets.people_icon} alt="Doctors List" />
            <p>profile</p>
          </NavLink>
        </ul>
)}
    </div>
  );
}

export default Sidebar;
