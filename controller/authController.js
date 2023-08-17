import { sendMail } from "../helper/sendMail.js";
import userModel from "../models/userModel.js";
import { comparePassword, hashedPassword } from './../helper/authHelper.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // validation 
        if (!name) {
            return res.send({ error: 'Name is required' });
        }
        if (!email) {
            return res.send({ error: 'email is required' });
        }
        if (!password) {
            return res.send({ error: 'password is required' });
        }
        if (!phone) {
            return res.send({ error: 'phone is required' });
        }

        // existing user
        const olduser = await userModel.findOne({ email: email })
        if (olduser) {
            return res.status(200).send({
                success: true,
                message: 'Aleady Register Pls login'
            })
        }

        const hashedPwd = await hashedPassword(password);
        const user = await new userModel({
            name, email, phone, address, password: hashedPwd
        }).save();

        res.status(201).send({
            success: true,
            message: 'user Register Successfully',
            user
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in register',
            error
        })
    }
}
    ;


    export const loginController = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send({
                    success: false,
                    message: 'Please enter email and password.',
                });
            }
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: 'Email is not registered.',
                });
            }
            const match = await comparePassword(password, user.password);
            if (!match) {
                return res.status(401).send({
                    success: false,
                    message: 'Invalid Password.',
                });
            }
    
            // Generate and send the token
            const token = await JWT.sign({ _id: user._id }, process.env.JWT_secret, { expiresIn: '7d' });
            res.status(200).send({
                success: true,
                message: 'Login successful',
                user: {
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                },
                token // Include the token in the response
            });
    
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: 'Error in login',
                error
            });
        }
    };

//login from phone and password

export const loginFromPhoneController=async (req,res)=>{
    try {
            const { phone, password } = req.body;
            if (!phone || !password) {
                return res.status(400).send({
                    success: false,
                    message: 'Please enter phone and password.',
                });
            }
            const user = await userModel.findOne({ phone });
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: 'user is not registered.',
                });
            }
            const match = await comparePassword(password, user.password);
            if (!match) {
                return res.status(401).send({
                    success: false,
                    message: 'Invalid Password.',
                });
            }
    
            // Generate and send the token
            const token = await JWT.sign({ _id: user._id }, process.env.JWT_secret, { expiresIn: '7d' });
            res.status(200).send({
                success: true,
                message: 'Login successful',
                user: {
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                },
                token // Include the token in the response
            });
    
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: 'Error in login',
                error
            });
        }



}



// forgot password
export const forgotPasswordController = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered.',
            });
        }

        // Generate and send the token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_secret, { expiresIn: '10m' });
        const link = `${process.env.CLIENT_URL}/reset-password/${token}`;
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Reset Password',
            html: `
                <h2>Please click on given link to reset your password</h2>
                <a href="${link}">${link}</a>
            `,
            text: `You are receiving this email because you (or someone else) have requested a password reset for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            ${link}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.`
        ,

        };
        await sendMail(mailOptions);
        res.status(200).send({
            success: true,
            message: 'Reset password link sent to your email address.',
            token
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in forgot password',
            error
        });
        
    }
};


// reset password
export const resetPasswordController = async (req, res) => {
    try {
        const { newPassword } = req.body;
        const token = req.headers.authorization.split(" ")[1];
        if (!newPassword || !token) {
            return res.status(400).send({
                success: false,
                message: 'All fields are required,password and token.',
            });
        }
        const decoded = await JWT.verify(token, process.env.JWT_secret);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found.',
            });
        }
        const hashedPwd = await hashedPassword(newPassword);
        await userModel.findByIdAndUpdate(decoded._id, { password: hashedPwd });
        res.status(200).send({
            success: true,
            message: 'Password reset successful.',
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in reset password',
            error
        });
    }

};


// login with google
// export const loginGoogleController = async (req, res) => {

// };