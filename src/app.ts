
import express from 'express'
import cors from 'cors'
import routes from './routers/routes'

import * as dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    private middlewares ():void {
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: true }))
      this.express.use(cors())
    }

    private routes ():void {
      this.express.use(routes)
    }
}

export default new App().express
