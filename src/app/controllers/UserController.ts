
import User from '../models/User'
import { Request, Response } from 'express'

interface bodyModel {
  email: string;
  name: string;
  password: string;
}

class UserController {
  public async create (req:Request, res:Response): Promise<Response> {
    const data = req.body as bodyModel

    const createUser = await User.Create(data.name, data.email, data.password)

    if (createUser.erro === true) {
      return res.status(400).json(createUser)
    }

    return res.status(200).json(createUser)
  }
}

export default new UserController()
