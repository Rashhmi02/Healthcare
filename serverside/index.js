const express=require('express')
const dbconnection=require('./db')
const cors = require("cors")
//app is an instance of the express 
const app=express()

const PORT=5000

app.use(express.json())
//connect with mongodb
dbconnection()
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Its my first API")
})




app.use("/api/service",require('./route/serviceRoute'));




app.listen(PORT,()=>{
    console.log(`server is listening on port: ${PORT}`)
})

