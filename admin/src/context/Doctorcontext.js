import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Doctorcontext = createContext();

const DoctorcontextProvider = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [dToken, setDToken] = useState(localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "");
  const [profileData, setProfileData] = useState(false);

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, { headers: { dToken } });
      if (data.success) {
        setProfileData(data.profileData);
        console.log(data.profileData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    dToken,
    setDToken,
    backendUrl,
    profileData,
    setProfileData,
    getProfileData,
  };

  return (
    <Doctorcontext.Provider value={value}>
      {props.children}
    </Doctorcontext.Provider>
  );
};

export default DoctorcontextProvider;
