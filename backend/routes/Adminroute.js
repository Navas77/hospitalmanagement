import express from "express";
import { addDoctor ,allDoctors,loginAdmin} from "../controllers/adminController.js"; // Include .js extension
import upload from "../middlewares/Multer.js"; // Correct the path
import authAdmin from "../middlewares/Authadmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const Adminrouter = express.Router();

Adminrouter.post("/add-doctor",authAdmin, upload.single('image'), addDoctor);
Adminrouter.post("/login", loginAdmin)
Adminrouter.post("/all-doctors",authAdmin, allDoctors)
Adminrouter.post("/change-availability",authAdmin, changeAvailability)


export default Adminrouter;
