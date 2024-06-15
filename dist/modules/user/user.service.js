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
const user_model_1 = require('./user.model')
const postUser = userData =>
  __awaiter(void 0, void 0, void 0, function* () {
    //TODO: handle error properly
    try {
      const doesExist = yield user_model_1.User.findOne({
        email: userData.email,
      })
      if (doesExist) {
        return { message: 'User Already exists in the database' }
      }
      const user = new user_model_1.User(userData)
      const result = yield user.save()
      return result
    } catch (error) {
      console.log(error)
    }
  })
const getUserByEmail = email =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user = yield user_model_1.User.findOne({ email })
      return user
    } catch (error) {
      console.log(error)
    }
  })
const userService = {
  postUser,
  getUserByEmail,
}
exports.default = userService
