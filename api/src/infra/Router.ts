import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

export default class Router {
    app: express.Express;

    constructor() {
        this.app = express()
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())
    }

    private setRoutes(){
        // Rotas da aplicação 
    }
}