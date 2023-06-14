import express from "express"
import mongoose from "mongoose"
import routes from "./routes"


class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    
    }

    private middleware(){
        this.express.use(express.json())
    }

    private routes(){
        this.express.use(routes)
    }

    private async database(){
        try {
             await mongoose.connect("mongodb://0.0.0.0:27017/AEP2BD")
            console.log("Connected Sucessfull with database")
        }
        catch (err) {
            console.error(err)

        }
    }
}

export default new App().express