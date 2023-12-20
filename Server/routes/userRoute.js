import express from "express"
// import {requireSignIn,adminMiddleware} from "../middlewares/userMiddleware.js"
import {registerController,loginController,loginFromPhoneController,forgotPasswordController,resetPasswordController}from "../controllers/userControler.js"
const router =express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/login2phone',loginFromPhoneController)
router.post('/forgotpassword',forgotPasswordController)
router.post('/resetpassword',resetPasswordController)


export default router;