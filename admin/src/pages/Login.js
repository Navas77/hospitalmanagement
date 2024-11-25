import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Admincontext } from '../context/Admincontext';
import './Login.css';
import { toast } from 'react-toastify';
import { Doctorcontext } from '../context/Doctorcontext';

function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(Admincontext);
  const { setDToken } = useContext(Doctorcontext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Admin login successful!"); // Added a success toast message
          console.log(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, { email, password });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          toast.success("Doctor login successful!"); // Added a success toast message
          console.log(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Please try again later.');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='formspan1'>
      <div className='span2'>
        <p className='state3'><span>{state}</span> Login</p>
        <div className='email5'>
          <p>Email:</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='required'
            type="email"
            required
          />
        </div>
        <div className='email5'>
          <p>Password:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="required"
            type="password"
            required
          />
        </div>
        <button className='but'>Login</button>
        {state === "Admin"
          ? <p>Doctor Login? <span className="logdoc" onClick={() => setState("Doctor")}>Click here</span></p>
          : <p>Admin Login? <span className="logdoc" onClick={() => setState("Admin")}>Click here</span></p>
        }
      </div>
    </form>
  );
}

export default Login;
