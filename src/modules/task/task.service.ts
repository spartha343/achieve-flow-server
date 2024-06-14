import { ObjectId } from 'mongodb'
import { ITask } from './task.interface'
import { Task } from './task.model'
import { taskStatusTypes } from './task.constants'

const postTask = async (taskData: ITask) => {
  //TODO: handle error properly
  try {
    const task = new Task(taskData)
    const result = await task.save()
    return result
  } catch (error) {
    console.log(error)
  }
}

//by user Id from mongoDB
const getTasksById = async (id: string) => {
  //TODO: handle error properly
  try {
    const tasks = await Task.find({ user: new ObjectId(id) })
    return tasks
  } catch (error) {
    console.log(error)
  }
}

const updateTaskById = async (
  id: string,
  status: (typeof taskStatusTypes)[number],
) => {
  //TODO: handle error properly
  try {
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true },
    )
    return task
  } catch (error) {
    console.log(error)
  }
}

const taskService = {
  postTask,
  getTasksById,
  updateTaskById,
}

export default taskService
