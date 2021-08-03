
import factory from '../factory'
import UserModel from '../../src/app/models/UserModel'

describe('Create user, with no routers', () => {
  it('should be able to CREATE a new user', async () => {
    const user = await factory.create('User', {
      email: 'withene.ti@gmail.com',
      password_hash: '123123'
    })
    const compareHash = await user.checkPassword('123123')
    expect(compareHash).toBe(true)
  })

  it('should be UPDATE one user', async () => {
    const user = await UserModel.findOne({ where: { email: 'withene.ti@gmail.com' } })

    await UserModel.update({ name: 'Witenhe' }, { where: { id: user.id } })

    const userConfirm = await UserModel.findByPk(user.id)

    expect(userConfirm.name).toBe('Witenhe')
  })

  it('should be DELETE one user', async () => {
    const user = await UserModel.findOne({ where: { email: 'withene.ti@gmail.com' } })
    const userDelete = await UserModel.destroy(
      {
        where: {
          id: user.id
        }
      })
    expect(userDelete).toBe(1)
  })
})
