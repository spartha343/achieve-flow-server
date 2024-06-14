import { Router } from 'express'
import userController from './user.controller'

const userRoutes = Router()

userRoutes.get('/:email', userController.getUserByEmail)
userRoutes.post('/', userController.postUser)

export default userRoutes
