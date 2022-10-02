require ('dotenv').config ()
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/details");
const cors = require("cors");




const app =express()

app.use(express.json());
app.use(cors());


app.use('/students',router) 




mongoose.connect(process.env.KEY).then(()=>
console.log('connected to database')).then(()=>{
    app.listen(5000)

}).catch((err)=>{
console.log(err);
})
