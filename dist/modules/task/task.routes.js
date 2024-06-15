'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const task_controller_1 = __importDefault(require('./task.controller'))
const taskRoutes = (0, express_1.Router)()
taskRoutes.get('/:id', task_controller_1.default.getTasksById)
taskRoutes.patch('/:id', task_controller_1.default.updateTaskById)
taskRoutes.post('/', task_controller_1.default.postTask)
exports.default = taskRoutes
