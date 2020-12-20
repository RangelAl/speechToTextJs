const express = require("express");

app = express();

app.get('/', (req,res)=>{
    console.log("rwes")
    res.sendFile(__dirname +"/index.html");
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("server running");
})