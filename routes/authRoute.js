import express from "express"
import {registerController,loginController,loginFromPhoneController}from "../controller/authController.js"
import { requireSignIn ,adminMiddleware} from "../middlewares/authMiddleware.js"

const router =express.Router()

// register (post)
router.post('/register',registerController)
// login
router.post('/login',loginController)
// lgin from phone
router.post('/login/phone',loginFromPhoneController)
export default router;
// protected routes token based
router.get('/profile',requireSignIn,(req,res)=>{
    res.send(req.user)
})

// protected routes access based
router.get('/admin',requireSignIn,adminMiddleware,(req,res) => {
    res.send('admin')
})