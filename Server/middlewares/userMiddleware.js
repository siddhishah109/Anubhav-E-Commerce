import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';



// protected routes token based
export const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = JWT.verify(token, process.env.JWT_secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// protected routes role based
export const adminMiddleware = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role === 1) {
            return res.status(403).json({ message: 'Admin resource. Access denied.' });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong in admin middleware',
            error: error.message
        });
    }
};

