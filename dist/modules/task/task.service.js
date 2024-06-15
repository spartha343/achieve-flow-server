'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const mongodb_1 = require('mongodb')
const task_model_1 = require('./task.model')
const postTask = taskData =>
  __awaiter(void 0, void 0, void 0, function* () {
    //TODO: handle error properly
    try {
      const task = new task_model_1.Task(taskData)
      const result = yield task.save()
      return result
    } catch (error) {
      console.log(error)
    }
  })
//by user Id from mongoDB
const getTasksById = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    //TODO: handle error properly
    try {
      const tasks = yield task_model_1.Task.find({
        user: new mongodb_1.ObjectId(id),
      })
      return tasks
    } catch (error) {
      console.log(error)
    }
  })
const updateTaskById = (id, status) =>
  __awaiter(void 0, void 0, void 0, function* () {
    //TODO: handle error properly
    try {
      const task = yield task_model_1.Task.findByIdAndUpdate(
        { _id: id },
        { status },
        { new: true },
      )
      return task
    } catch (error) {
      console.log(error)
    }
  })
const taskService = {
  postTask,
  getTasksById,
  updateTaskById,
}
exports.default = taskService
