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

app.get("/validate.js", (req, rea) =>{
    res.redirect("..//public/validate.js")
})

app.post("/edit", (req, res) =>{
    res.render("../public/edit.ejs",{data:req})
});

app.post("/delete", (req, res) =>{
    const name = req.body.name;
    console.log(`delete from characters where name="${name}"`)
    db.query(`delete from characters where name="${name}"`,(error, table)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
            console.log("Sin errores para eliminar")
        }
    })
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

app.post("/editdata", (req,res)=>{
    const oldname = req.body.oldname;
    const name = req.body.name;
    const franchise = req.body.franchise;
    const year = req.body.year;
    db.query(`update characters set name="${name}", franchise="${franchise}", year="${year}" where name="${oldname}";`,(error, table)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
        }
    })
})

app.post("/deletedata", (req,res)=>{
    const name = req.body.name;
    db.query(`insert into characters values("${name}","${franchise}","${year}");`,(error, table)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
        }
    })
})

const puerta = process.env.port || 3000

app.listen(puerta, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})
