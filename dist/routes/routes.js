'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const user_routes_1 = __importDefault(require('../modules/user/user.routes'))
const task_routes_1 = __importDefault(require('../modules/task/task.routes'))
const routes = (0, express_1.Router)()
routes.use('/users', user_routes_1.default)
routes.use('/tasks', task_routes_1.default)
exports.default = routes
