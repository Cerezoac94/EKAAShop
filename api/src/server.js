import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

const port = process.env.API_PORT
const app = express()

app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.listen(port,() => {
    console.log('Server UP');
})