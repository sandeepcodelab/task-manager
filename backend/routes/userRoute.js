import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const Router = express.Router();

Router.route("/register", registerUser);
Router.route("/login", loginUser)

export default Router;