import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './AddDoctor.css';
import { Admincontext } from '../../context/Admincontext';
import { toast } from 'react-toastify';
import axios from 'axios';

function AddDoctor() {
  const { backendUrl, aToken } = useContext(Admincontext);

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", fees);
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("address", JSON.stringify({ line1: address1, line2: address2 }));
      //console log formdata
      console.log("Backend URL:", backendUrl);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, {
        headers: { aToken },
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 year");
        setFees("");
        setAbout("");
        setSpeciality("General physician");
        setDegree("");
        setAddress1("");
        setAddress2("");

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the doctor.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='one'>
      <p className='two'>Add Doctor</p>

      <div className="form-group">
        <div className='form-3'>
          <label htmlFor='doc-img'>
            <img className="image333" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload Area" />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type='file' id="doc-img" hidden />
          <p>Upload doctor picture</p>
        </div>
        <div className='divww'>
          <div className='divwww'>
            <div className="form-group1">
              <p>Doctor Name</p>
              <input
                className='doctorname'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group1">
              <p>Doctor Email</p>
              <input
                className='doctorname'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group1">
              <p>Doctor Password</p>
              <input
                className='doctorname'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group1">
              <p>Experience</p>
              <select
                className='doctorname'
                name="experience"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1 year">1 year</option>
                <option value="2 year">2 years</option>
                <option value="3 year">3 years</option>
                <option value="4 year">4 years</option>
                <option value="5 year">5 years</option>
                <option value="6 year">6 years</option>
                <option value="7 year">7 years</option>
                <option value="8 year">8 years</option>
                <option value="9 year">9 years</option>
                <option value="10 year">10 years</option>
              </select>
            </div>

            <div className="form-group1">
              <p>Fees</p>
              <input
                className='doctorname'
                type='number'
                placeholder='Fees'
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='divqwe'>
            <div className="form-group1">
              <p>Speciality</p>
              <select
                className='doctorname'
                name="speciality"
                id="speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="form-group1">
              <p>Education</p>
              <input
                className='doctorname'
                type='text'
                placeholder='Education'
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </div>

            <div className="form-group1">
              <p>Address</p>
              <input
                className='doctorname'
                type='text'
                placeholder='Address1'
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
              <input
                className='doctorname'
                type='text'
                placeholder='Address2'
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group1">
        <p className='docv'>About Doctor</p>
        <textarea
          className='aboutdoctor'
          placeholder='Write about doctor'
          rows={5}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Doctor</button>
    </form>
  );
}

export default AddDoctor;
