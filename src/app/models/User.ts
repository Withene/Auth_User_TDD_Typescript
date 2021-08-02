import UserModel from './UserModel'
import isEmail from 'validator/lib/isEmail'

interface UserReturn {
    erro?:boolean
    Message?:string
    data?:string | any
  }

class User {
  public async Create (name:string, email:string, password:string): Promise<UserReturn> {
    const verifyDates = await this.validator(email, password, name)

    if (verifyDates !== true) {
      const verify = await this.VerifyEmail(email)

      if (verify !== true) {
        const user = await UserModel.create({
          name: name,
          email: email,
          password_hash: password
        })
        return { erro: false, Message: 'Create User Sucessful', data: user }
      } else {
        return { erro: true, Message: 'Email already exist' }
      }
    } else {
      return { erro: true, Message: 'Email is Undefined' }
    }
  }

  private async VerifyEmail (email:string) {
    const user = await UserModel.findOne({
      where: {
        email: email
      }
    })
    if (user !== null) {
      return true
    } else {
      return false
    }
  }

  private async validator (email:string, password:string, name:string): Promise<boolean> {
    if (email === undefined || email == null) {
      return true
    }
    if (name === undefined || name == null) {
      return true
    }
    if (password === undefined || password == null) {
      return true
    }
    if (isEmail(email) === false) {
      return true
    }
    return false
  }
}

export default new User()
