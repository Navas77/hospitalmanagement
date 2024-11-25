import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Appcontext } from '../Context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { backendUrl, token, setToken } = useContext(Appcontext);
  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      if (state === "Sign up") {
       const {data}  = await axios.post(`${backendUrl}/api/user/register`, { name, password, email });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
      } else {
        toast.error(data.message);
      }
        
    

      
        
        // toast.success("Operation successful!");
      } else {
        
          const {data} = await axios.post(`${backendUrl}/api/user/login`, {  password, email });
          if (data.success) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
        } else {
          toast.error(data.message);
       
      }
    }
   } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(()=>{
if(token){
navigate('/')
}
  },[token,navigate])

  return (
    <form onSubmit={onSubmitHandler} className='formlogin'>
      <div className='parapls'>
        <p className='paracreate'>{state === "Sign up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "Sign up" ? "Sign up" : "Log in"} to book appointment</p>
        {state === "Sign up" && (
          <div>
            <p>Full Name</p>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
        )}
        <div>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit" className='btn'>{state === "Sign up" ? "Create Account" : "Login"}</button>
        {state === "Sign up"
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='span'>Login here</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign up')} className='span'>Click here</span></p>
        }
      </div>
    </form>
  );
}

export default Login;
