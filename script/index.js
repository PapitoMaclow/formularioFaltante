const express = require("express");
const app = express();


app.get("/",function(req, res){
    res.sendFile(__dirname + "\index.html");
});





app.listen(5441 , function(){
    console.log("Servidor rodando em : localhost:5441");
});
