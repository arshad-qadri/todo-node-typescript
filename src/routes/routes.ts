import express from "express"
import { createTodo, deleteOneTodo, findOneTodo, findTodo, updateOneTodo } from "../controllers/todo.controller"
const router = express.Router()


router.post("/create",createTodo)
router.get("/allTodo",findTodo)
router.get("/todo/:id",findOneTodo)
router.put("/updateTodo",updateOneTodo)
router.delete("/todo/:id",deleteOneTodo)

export default router
