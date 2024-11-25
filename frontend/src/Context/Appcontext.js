// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import {toast} from "react-toastify"

// export const Appcontext = createContext();


// const Appcontextprovider = (props) => {
//     const currencySymbol = "$";
//     const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
//     const [doctors, setDoctors] = useState([]);
//     const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):false)
//     const [userData,setUserData] = useState(false)
    

//   const getDoctorsData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
//       if (data.success) {
//         setDoctors(data.doctors);
//       }else{
//         toast.error(data.message)
//       }
//     } catch (error) {
//       console.error("Failed to fetch doctors data:", error);
//       toast.error(error.message)
//     }
//   };


//   const loadUserProfileData = async () => {
//     try{
// const {data} = await axios.get(`${backendUrl}/api/user/get-profile`,{headers:{token}})
//  if(data.success){
//   setUserData(data.userData)
//  }else{
//   toast.error(data.message)
//  }

//     }catch(error){
//       console.error("Failed to fetch doctors data:", error);
//       toast.error(error.message)
//     }
//   }
  
  

//   const value = {
//     doctors,
//     currencySymbol,
//     getDoctorsData,
//     token,setToken,
//     backendUrl,
//     userData,setUserData,
//     loadUserProfileData, // Include the function in the context value
//   };


//   useEffect(() => {
//     getDoctorsData(); // Fetch doctors data when the component mounts
//   }, []);

//   useEffect(()=>{
// if(token) {
//   loadUserProfileData()
// }else{
//   setUserData(false)
// }
//   },[token])

 

//   return (
//     <Appcontext.Provider value={value}>
//       {props.children}
//     </Appcontext.Provider>
//   );
// };

// export default Appcontextprovider;


import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Appcontext = createContext();

const Appcontextprovider = (props) => {
  const currencySymbol = "$";
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : false);
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch doctors data:", error);
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token} }
      );
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch user profile data:", error);
      toast.error(error.message);
    }
  };

  const refreshAuthToken = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/refresh-token`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
      } else {
        console.error('Failed to refresh token');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  useEffect(() => {
    getDoctorsData(); // Fetch doctors data when the component mounts
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
      const interval = setInterval(() => {
        refreshAuthToken();
      }, 15 * 60 * 1000); // Refresh token every 15 minutes

      return () => clearInterval(interval); // Clear interval on unmount
    } else {
      setUserData(false);
    }
  }, [token]);

  const value = {
    doctors,
    currencySymbol,
    getDoctorsData,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    refreshAuthToken // Include the function in the context value
  };

  return (
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Appcontextprovider;
