import { v2 as Cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectCloudinary = () => {
    // Debugging logs
    console.log('CLOUD_NAME:', process.env.CLOUD_NAME);
    console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY);
    console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET);

    Cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
};

export default connectCloudinary;
