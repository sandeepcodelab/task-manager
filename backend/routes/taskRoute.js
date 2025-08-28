import { Router } from "express";
import verifyJWT from "../middlewares/authMiddleware.js";
import { addTask, allTasks, getTask, updateTask, deleteTask } from "../controllers/taskController.js";


const router = Router();

router.route("/add").post(verifyJWT, addTask);
router.route("/all").get(verifyJWT, allTasks);
router.route("/edit/:id").get(verifyJWT, getTask);
router.route("/update/:id").patch(verifyJWT,updateTask);
router.route("/delete/:id").delete(verifyJWT, deleteTask);

export default router