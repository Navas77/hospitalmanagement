import express from 'express';
import { doctorList,loginDoctor, changeAvailability,doctorProfile,updateDoctorProfile } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/AuthDoctor.js';
const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList);
doctorRouter.post('/change-availability', changeAvailability);
doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/profile',authDoctor, doctorProfile);
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile );


export default doctorRouter;
