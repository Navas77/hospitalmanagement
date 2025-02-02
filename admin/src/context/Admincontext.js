import { createContext, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
export const Admincontext = createContext();

const AdmincontextProvider = (props) => {
     const [aToken, setAToken] = useState(localStorage.getItem("aToken") ?localStorage.getItem("atoken") : "");
     const [doctors,setDoctors]= useState([])

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
     

    const getAllDoctors = async () =>{

        try{
         const {data} = await axios.post(`${backendUrl}/api/admin/all-doctors`,{},{headers:{aToken}})
         if (data.success){
            setDoctors(data.doctors)
            console.log(data.doctors);
            
         }else{
            toast.error(data.message)
         }
        }catch(error){
         toast.error(error.message)
        }
    }

   const changeAvailability = async (docId)=>{

    try{
  const {data} = await axios.post(`${backendUrl}/api/admin/change-availability`,{docId},{headers:{aToken}})

  if(data.success){
    toast.success(data.message)
    getAllDoctors()
  }else{
    toast.error(data.message)
  }
    }catch(error){
        toast.error(error.message)
    }

   }



    const value = { aToken, setAToken, backendUrl,doctors,getAllDoctors,changeAvailability };
   

    return (
        <Admincontext.Provider value={value}>
            {props.children}
        </Admincontext.Provider>
    );
};

export default AdmincontextProvider;
