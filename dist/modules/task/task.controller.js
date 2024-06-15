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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const http_status_codes_1 = require('http-status-codes')
const task_service_1 = __importDefault(require('./task.service'))
const postTask = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const taskData = req.body
    const result = yield task_service_1.default.postTask(taskData)
    res.status(http_status_codes_1.StatusCodes.OK).send(result)
  })
const getTasksById = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const tasks = yield task_service_1.default.getTasksById(id)
    res.status(http_status_codes_1.StatusCodes.OK).send(tasks)
  })
const updateTaskById = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const { status } = req.body
    const task = yield task_service_1.default.updateTaskById(id, status)
    res.status(http_status_codes_1.StatusCodes.OK).send(task)
  })
const taskController = { postTask, getTasksById, updateTaskById }
exports.default = taskController
