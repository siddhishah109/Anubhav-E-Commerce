import express from "express"
import {registerController,loginController,loginFromPhoneController}from "../controller/authController.js"

const router =express.Router()

// register (post)
router.post('/register',registerController)
// login
router.post('/login',loginController)
// lgin from phone
router.post('/login/phone',loginFromPhoneController)
export default router;