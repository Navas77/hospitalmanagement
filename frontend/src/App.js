
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';

import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import Myappointments from './pages/Myappointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/my-appointments" element={<Myappointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
