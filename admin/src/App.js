import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Admincontext } from "./context/Admincontext";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Admin/Dashboard";
import Appointment from "./pages/Admin/Appointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import Doctorslist from "./pages/Admin/Doctorslist";
import { Doctorcontext } from "./context/Doctorcontext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import Doctorappointment from "./pages/Doctor/Doctorappointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

function App() {
  const { aToken } = useContext(Admincontext);
  const {dToken} = useContext(Doctorcontext);
  return aToken || dToken ? (
    
      <div className="app">
        <ToastContainer />
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              {/*admin route*/}
              <Route path="/" element={<></>} /> {/* Fragment to align the layout */}
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<Appointment />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<Doctorslist />} />

               {/*doctor route*/}
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/doctor-appointments" element={<Doctorappointment />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    
  ) : (
    
      <>
    <Login />
      
      <ToastContainer />
      </>
  );
}

export default App;
