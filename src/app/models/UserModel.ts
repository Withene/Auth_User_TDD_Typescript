import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../config/sequelize'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

interface UserAttributes {
  id?:string;
  email: string;
  name: string;
  // eslint-disable-next-line camelcase
  password_hash: string;
  createdAt?:string
  updatedAt?:string
}

interface User extends Model{
  // eslint-disable-next-line camelcase
  password_hash: string;
}

interface UserInstance
  extends Model<UserAttributes>,
    UserAttributes {
  checkPassword(password: string | number):boolean|null,
  generateToken():string,

}

const UserModel = sequelize.define< UserInstance >(
  'User',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  },
  {
    hooks: {
      beforeCreate: async (user: User) => {
        const saltRounds = 10
        user.password_hash = await hash(user.password_hash, saltRounds)
      }
    }
  }
)
UserModel.prototype.generateToken = function () {
  return sign({ id: this.id }, process.env.APP_SECRET, { expiresIn: '1hr' })
}

UserModel.prototype.checkPassword = async function (password) {
  return await compare(password, this.password_hash)
}

export default UserModel
