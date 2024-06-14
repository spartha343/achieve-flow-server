import { Schema, model } from 'mongoose'
import { ITask } from './task.interface'
import { priorityTypes, taskStatusTypes } from './task.constants'

const taskSchema = new Schema<ITask>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    priority: {
      type: String,
      enum: priorityTypes,
      default: 'low',
      required: true,
    },
    status: {
      type: String,
      enum: taskStatusTypes,
      default: 'to-do',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Task = model<ITask>('Task', taskSchema)
