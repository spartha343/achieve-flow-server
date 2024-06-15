import { Router } from 'express'
import userRoutes from '../modules/user/user.routes'
import taskRoutes from '../modules/task/task.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/tasks', taskRoutes)

export default routes
