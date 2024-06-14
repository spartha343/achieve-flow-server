import { Schema } from 'mongoose'
import { priorityTypes, taskStatusTypes } from './task.constants'

export interface ITask {
  user: Schema.Types.ObjectId
  title: string
  description?: string
  deadline?: Date
  priority: (typeof priorityTypes)[number]
  status: (typeof taskStatusTypes)[number]
}
