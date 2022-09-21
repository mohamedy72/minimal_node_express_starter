import express from 'express'
import { getAllUsers } from '../controllers/userController'

const userRouter = express.Router()


userRouter.route("/").get(getAllUsers)


export default userRouter