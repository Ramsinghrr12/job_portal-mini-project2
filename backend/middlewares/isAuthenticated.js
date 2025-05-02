import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const isAuthenticated = async (req, res, next) => {
    try {
        console.log("JWT_SECRET in Middleware:", process.env.JWT_SECRET || "Not Found"); // Debugging

        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        req.id = decoded.userId;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export default isAuthenticated;
