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