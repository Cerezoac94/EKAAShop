import {Sequialize} from 'sequelize'
import 'dotenv/config'

const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME
const dbUserName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DBHOST

const conn = new Sequialize(dbName, dbUserName, dbPassword,{
    host:dbHost,
    dialect:'mysql',
    port:dbPort
})
try{
    await conn.authenticate();
    console.log('Connection has been established successfully.');
} catch (error){
    console.log('Unable to connect to the database:',error);
}