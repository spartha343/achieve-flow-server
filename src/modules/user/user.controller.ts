import { Request, Response } from 'express'
import { IUser } from './user.interface'
import userService from './user.service'
import { StatusCodes } from 'http-status-codes'

const postUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body
  const result = await userService.postUser(userData)
  res.status(StatusCodes.OK).send(result)
}

const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params
  const result = await userService.getUserByEmail(email)
  res.status(StatusCodes.OK).send(result)
}

const userController = { postUser, getUserByEmail }
export default userController
