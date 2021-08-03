
import request from 'supertest'

import app from '../../src/app'

describe('Authentication', () => {
  it('should be able to create a user With router', async () => {
    const response = await request(app).post('/user').send({
      name: 'withene',
      email: 'withene28@gmail.com',
      password: '282828'
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('user.id')
  })

  it('should not be able to create an existing user', async () => {
    const response = await request(app).post('/user').send({
      name: 'withene',
      email: 'withene28@gmail.com',
      password: '29062020'
    })

    expect(response.status).toBe(400)
  })

  it('should not be able to create when dont have email ', async () => {
    const response = await request(app).post('/user').send({
      name: 'withene',
      password: '282828'
    })
    expect(response.status).toBe(400)
  })

  it('should not be able to create when dont have password ', async () => {
    const response = await request(app).post('/user').send({
      email: 'withene28@gmail.com',
      name: 'withene'
    })
    expect(response.status).toBe(400)
  })

  it('should not be able to create when use invalid email ', async () => {
    const response = await request(app).post('/user').send({
      email: 'withene28gmail.com',
      name: 'withene',
      password: '282828'
    })
    expect(response.status).toBe(400)
  })

  it('should not be able to create when use invalid email ', async () => {
    const response = await request(app).post('/login').send({
      email: 'withene2@gmail.com',
      name: 'withene',
      password: '282828'
    })
    expect(response.status).toBe(400)
  })

  it('should be able to create a token on login with credencial correct', async () => {
    const response = await request(app).post('/login').send({
      email: 'withene28@gmail.com',
      password: '282828'
    })
    expect(response.status).toBe(200)
  })

  it('should NOT be able to create a token on login when credencial incorrect', async () => {
    const response = await request(app).post('/login').send({
      email: 'withene28@gmail.com',
      password: '2828'
    })
    expect(response.status).toBe(400)
  })

  it('should NOT be able to create a token on login when dont have email or password', async () => {
    const response = await request(app).post('/login').send({
      email: 'withene28@gmail.com'
    })
    expect(response.status).toBe(400)
  })
})
