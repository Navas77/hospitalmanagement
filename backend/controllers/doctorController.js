import doctorModel from "../models/Doctormodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
    res.json({ success: true, message: "Availability changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API for doctorlogin

const loginDoctor = async (req,res)=>{
  try{
   
const {email,password} = req.body
const doctor = await doctorModel.findOne({email})

if(!doctor){
return res.json({success:false,message:"Invalis credentials"})
}
const isMatch = await bcrypt.compare(password,doctor.password)
if(isMatch){
     const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)

     res.json({success:true,token})
}
else{
  res.json({ success: false, message: "invalid credentials" });
}


  }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


//Api to get doctor profile doctor pannel

const doctorProfile = async (req,res) => {
  try{
  const {docId} = req.body
  const profileData = await doctorModel.findById(docId).select("-password")
  res.json({success:true,profileData})
  }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//API to update profile data from doctor pannel

const updateDoctorProfile = async (req,res)=>{

  try{
const {docId,fees,address,available} = req.body
await doctorModel.findByIdAndUpdate(docId,{fees,address,available})

res.json({success:true,message:"Profile updated"})
  }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });

  }
}

export { changeAvailability,
   doctorList,loginDoctor ,
   doctorProfile,
   updateDoctorProfile};
