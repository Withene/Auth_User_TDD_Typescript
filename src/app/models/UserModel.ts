import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../config/sequelize'
import { hash, compare } from 'bcrypt'

interface UserAttributes {
  id?:number
  email?: string;
  name?: string;
  // eslint-disable-next-line camelcase
  password_hash: string;
}

interface User extends Model{
  // eslint-disable-next-line camelcase
  password_hash: string;
}

interface UserInstance
  extends Model<UserAttributes>,
    UserAttributes {}

const UserModel = sequelize.define< UserInstance >(
  'User',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (user: User) => {
        const saltRounds = 10
        user.password_hash = await hash(user.password_hash, saltRounds)
      }
    }
  }

)

UserModel.prototype.checkPassword = function (password) {
  return compare(password, this.password_hash)
}

export default UserModel
