import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Appcontext } from '../Context/Appcontext';
import { assets } from '../assets/assets';
import './Appointment.css'

function Appointment() {
  const { docId } = useParams();
  const { doctors,currencySymbol } = useContext(Appcontext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  if (!docInfo) {
    return <p>Loading...</p>; // Show a loading message while fetching data
  }

  return docInfo && (
    <div>
      {/*---doctor details---*/}
      <div className='Doctordetails3'>
        <div>
          <img className='docinfoimage' src={docInfo.image} alt={docInfo.name} /> {/* Ensure the image source is correct */}
        </div>
        <div className='docinfonamedegree'>
          {/* ---doc info :name, degree, experience */}
          <p>{docInfo.name} <img src={assets.verified_icon} alt="Verified Icon" /></p>
          <p>Degree: {docInfo.degree}</p>
          <p>Experience: {docInfo.experience} years</p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          {/* ---doctor about--- */}
          <div>
            <p>About <img src={assets.info_icon} alt=""/></p>
            <p>{docInfo.about}</p>
          </div>
          <p>Appointment fee:<span>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
