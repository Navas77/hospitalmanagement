import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Adminrouter from './routes/Adminroute.js'; // Include the .js extension
import dotenv from 'dotenv';
import connectCloudinary from './config/Cloudnery.js';
import doctorRouter from './routes/Doctorroute.js';
import userRouter from './routes/UserRouter.js';





dotenv.config();
connectCloudinary()

//app configure
const app = express();
const port = process.env.PORT || 1200;

  

mongoose.connect("mongodb://localhost:27017/prescripto")
    .then(() => {
        console.log("mongodb connected successfully");
    })
    .catch(() => {
        console.log("mongodb connection error");
    })

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// API endpoint
app.use('/api/admin', Adminrouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/user',userRouter);



app.get('/', (req, res) => {
    res.send("API WORKING");

});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
