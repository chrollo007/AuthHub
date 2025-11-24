import express from "express";
import authenticationController from "../controllers/authenticationController.js";
const router=express.Router();


router.get("/hello",authenticationController.hello)
router.post("/register",authenticationController.register)
router.post("/login",authenticationController.login)
router.get("/object",authenticationController.get);

export default router;