import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // ✅ Correct
    api_key: process.env.CLOUDINARY_API_KEY,        // ✅ Correct
    api_secret: process.env.CLOUDINARY_API_SECRET   // ✅ Correct
});

export default cloudinary;
