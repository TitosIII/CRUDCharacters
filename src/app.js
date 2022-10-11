import express from "express";
import bodyParser from "body-parser";
import { port } from "./config.js"
import {db} from "./mysqldb.js"

const app = express();
app.use(bodyParser.json());

app.get("/", ()=>{
    db.query("select * from characters;")
})

app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})
