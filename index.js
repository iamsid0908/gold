const bodyParser = require("body-parser")
const express=require("express")
const app=express()
const mongoose =require("mongoose")
const cors=require("cors")
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sidd:sid@cluster0.p6xpler.mongodb.net/")
const db=mongoose.connection;
db.on("open",()=>{
    console.log("connected")

})
db.on("error",()=>{
    console.log("error")
})
require("./app/routes/gold.route")(app)
require("./app/routes/goldPrice.routes")(app)
const port=8000;
app.listen(port,()=>{
    console.log("server running at "+port);
})