import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

const configs = {
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASS, configs)
