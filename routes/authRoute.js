import express from "express"
import {registerController,loginController,loginFromPhoneController,forgotPasswordController,resetPasswordController}from "../controller/authController.js"
import { requireSignIn ,adminMiddleware} from "../middlewares/authMiddleware.js"

const router =express.Router()

// register (post)
router.post('/register',registerController)

// login
router.post('/login',loginController)

// lgin from phone
router.post('/login/phone',loginFromPhoneController)

// protected routes token based
router.get('/profile',requireSignIn,(req,res)=>{
    res.send(req.user)
})

// protected routes access based
router.get('/admin',requireSignIn,adminMiddleware,(req,res) => {
    res.send('admin')
})

// forgot password
router.post('/forgotpassword',forgotPasswordController)

// reset password
router.post('/resetpassword',resetPasswordController)

// login with google
// router.post('/googlelogin',loginGoogleController)





export default router;