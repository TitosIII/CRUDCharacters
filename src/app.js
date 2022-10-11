import express from "express"
import mysql2 from "mysql2"
import { port } from "./config.js"
import {db} from "./mysqldb.js"

const app = express();

app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})
