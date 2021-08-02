
import faker from 'faker'
import { factory } from 'factory-girl'
import UserModel from '../src/app/models/UserModel'

factory.define('User', UserModel, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export default factory
