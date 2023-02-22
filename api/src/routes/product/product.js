import { Router } from 'express'


const product = Router()

product.get('/', (req, res)=>{
    res.send('<h1>Hola</h1>')
})

export default product