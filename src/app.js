import express from "express";
import bodyParser from "body-parser";
import { port } from "./config.js"
import {db} from "./mysqldb.js"

const app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    db.query("select * from characters;", (error, table)=>{
        if (error){
            console.log(error)
        }else{
            res.render("../public/index.ejs", {table:table})
        }
    })
});

app.get("/add", (req, res) =>{
    res.render("../public/create.ejs",{var:"hola"})
});

app.get("/addtodb", (req,res)=>{
    db.query(`insert into characters values("${req.body.name}","${req.body.franchise}","${req.body.name}");`)
})

app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})
