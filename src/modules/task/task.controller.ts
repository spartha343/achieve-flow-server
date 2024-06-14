import { Request, Response } from 'express'
import { ITask } from './task.interface'
import { StatusCodes } from 'http-status-codes'
import taskService from './task.service'

const postTask = async (req: Request, res: Response) => {
  const taskData: ITask = req.body
  const result = await taskService.postTask(taskData)
  res.status(StatusCodes.OK).send(result)
}

const getTasksById = async (req: Request, res: Response) => {
  const { id } = req.params
  const tasks = await taskService.getTasksById(id)
  res.status(StatusCodes.OK).send(tasks)
}

const updateTaskById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { status } = req.body
  const task = await taskService.updateTaskById(id, status)
  res.status(StatusCodes.OK).send(task)
}

const taskController = { postTask, getTasksById, updateTaskById }
export default taskController
