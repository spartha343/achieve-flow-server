import { Router } from 'express'
import taskController from './task.controller'

const taskRoutes = Router()

taskRoutes.get('/:id', taskController.getTasksById)
taskRoutes.patch('/:id', taskController.updateTaskById)
taskRoutes.post('/', taskController.postTask)

export default taskRoutes
