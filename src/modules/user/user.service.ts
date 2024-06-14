import { IUser } from './user.interface'
import { User } from './user.model'

const postUser = async (userData: IUser) => {
  //TODO: handle error properly
  try {
    const doesExist = await User.findOne({ email: userData.email })
    if (doesExist) {
      return { message: 'User Already exists in the database' }
    }
    const user = new User(userData)
    const result = await user.save()
    return result
  } catch (error) {
    console.log(error)
  }
}

const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email })
    return user
  } catch (error) {
    console.log(error)
  }
}

const userService = {
  postUser,
  getUserByEmail,
}

export default userService
