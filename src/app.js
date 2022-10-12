import express from "express";
import bodyParser from "body-parser";
import { port } from "./config.js"
import {db} from "./mysqldb.js"

const app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

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

app.post("/savedata", (req,res)=>{
    const name = req.body.name;
    const franchise = req.body.franchise;
    const year = req.body.year;
    db.query(`insert into characters values("${name}","${franchise}","${year}");`,(error, table)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
        }
    })
})

app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})
