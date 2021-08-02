
import factory from '../factory'
import UserModel from '../../src/app/models/UserModel'

describe('Create user, with no routers', () => {
  it('should be able to CREATE a new user', async () => {
    const user = await factory.create('User', {
      password_hash: '123123'
    })
    const compareHash = await user.checkPassword('123123')
    expect(compareHash).toBe(true)
  })

  it('should be UPDATE one user', async () => {
    await UserModel.update({ name: 'Witenhe' }, { where: { id: 1 } })

    const userConfirm = await UserModel.findByPk(1)

    expect(userConfirm.name).toBe('Witenhe')
  })

  it('should be DELETE one user', async () => {
    const user = await UserModel.destroy(
      {
        where: {
          id: 1
        }
      })
    expect(user).toBe(1)
  })
})
