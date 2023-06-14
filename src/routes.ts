import { Router } from "express"
import userController from "./users/user.controller"

const routes = Router()

routes.post("/createUser", userController.create)
routes.post("/createUsers", userController.createMany)
routes.get("/male", userController.findMale)
routes.get("/user/:name", userController.findByName)
routes.get("/weight", userController.avgWeight)
routes.get("/unicesumar", userController.findUnicesumar)
routes.put("/update/:id", userController.updateUser)
routes.delete("/delete/:id", userController.deleteUser)



export default routes

