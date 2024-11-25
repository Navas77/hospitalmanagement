import validator from 'validator';
import bcrypt from 'bcryptjs';
import doctorModel from '../models/Doctormodel.js';
import { v2 as Cloudinary } from 'cloudinary';
import jwt from "jsonwebtoken"

// API for adding doctors
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Validate if necessary details are missing
        if (!name || !email || !password || !speciality || !degree || !about || !fees || !address || !imageFile) {
            return res.json({ success: false, message: "Missing details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        try {
            // Upload image to Cloudinary
            const imageUpload = await Cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            const imageUrl = imageUpload.secure_url;

            // Prepare doctor data
            const doctorsData = {
                name,
                email,
                password: hashedPassword,
                speciality,
                degree,
                experience,
                about,
                fees,
                address: JSON.parse(address),
                image: imageUrl, // Add image URL here
                date: Date.now()
            };

            // Save the new doctor to the database
            const newDoctor = new doctorModel(doctorsData);
            await newDoctor.save();

            res.json({ success: true, message: "Doctor added" });
        } catch (error) {
            console.error('Error uploading image:', error);
            res.json({ success: false, message: 'Failed to upload image' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
//API for the admin login
const loginAdmin = async (req,res) =>{
    try{
        const {email,password} =req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
          const token = jwt.sign(email+password,process.env.JWT_SECRET)
          res.json({success:true,token})
        }else{
    res.json({success:false,message:error.message})
        }

    }catch (error){
        console.log(error);
        res.json({success:false,message:error.message})
        

    }
}
// API to get all doctors list
const allDoctors = async(req,res)=>{
    try{

        const doctors = await doctorModel.find({}).select("-password")
        res.json({success:true,doctors})
        



    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message}) 
    }
}


export { addDoctor,loginAdmin,allDoctors };
