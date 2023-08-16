import express from "express"
import {registerController,loginController}from "../controller/authController.js"

const router =express.Router()

// register (post)
router.post('/register',registerController)
// login
router.post('/login',loginController)
export default router;