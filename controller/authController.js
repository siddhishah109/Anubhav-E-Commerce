import userModel from "../models/userModel.js";
import { hashedPassword } from './../helper/authHelper.js';




export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // validation 
        if(!name){
            return res.send({error:'Name is required'});
        }
        if(!email){
            return res.send({error:'email is required'});
        }
         if(!password){
            return res.send({error:'password is required'});
        }
        if(!phone){
            return res.send({error:'phone is required'});
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
