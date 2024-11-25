import React, { useContext, useEffect, useState } from 'react'
import { Doctorcontext } from '../../context/Doctorcontext'
import { Appcontext } from '../../context/Appcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
function DoctorProfile() {

    const { dToken, profileData, getProfileData, setProfileData,backendUrl } = useContext(Doctorcontext)
    const { currency} = useContext(Appcontext)
    const [isEdit, setIsEdit] = useState(false)
    const updateProfile = async () =>{
        try{


            const updateData = {
                address: profileData.address,
                fees:profileData.fees,
                available:profileData.available
            }

            const {data} = await axios.post(`${backendUrl}/api/doctor/update-profile`,updateData,{headers:{dToken}})
           if(data.success){
            toast.success(data.message)
            setIsEdit(false)
            getProfileData()
           }else{
            toast.error(data.message)
           }
          
        
        }catch(error){
            toast.error(error.message)
            console.log(error);
            
        }
    }
    useEffect(() => {

        if (dToken) {
            getProfileData()
        }

    }, [dToken])
    return profileData && (
        <div>

            <div>
                <div>
                    <img src={profileData.image} alt="" />
                </div>
                <div>
                    {/* doc info name degree experirnce*/}
                    <p>{profileData.name}</p>
                    <div>
                        <p>{profileData.degree}-{profileData.speciality}</p>
                        <button>{profileData.experience}</button>
                    </div>
                    {/*doc about*/}
                    <div>
                        <p>About :</p>
                        <p>
                            {profileData.about}
                        </p>
                    </div>
                    <p>
                        appointment fee: <span>{currency}{isEdit ? <input type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span>
                    </p>
                    <div>
                        <p>Address:</p>
                        <p>{isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.addresline1} /> : profileData.address.line1}
                            <br />
                            {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.addresline2} /> : profileData.address.line2}
                        </p>

                    </div>
                    <div>
                        <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" name='' id='' />
                        <label htmlFor=''>Available</label>
                    </div>

                    {
                        isEdit
                            ? <button onClick={updateProfile}>save</button>

                            : <button onClick={() => setIsEdit(true)}>Edit</button>
                    }




                </div>


            </div>
        </div>
    )
}

export default DoctorProfile