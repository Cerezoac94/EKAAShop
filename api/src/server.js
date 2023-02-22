import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import conn from './db/db.js'
import { Product } from './models/index.js'

const port = process.env.API_PORT

const app = express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

await conn.sync({force:true}).then(()=>{
    app.listen(port,() => {
        console.log('Server UP');
    })
})