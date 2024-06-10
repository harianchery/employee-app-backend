const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee=require("./models/employee")

const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Add")
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("Delete")
})

app.get("/view",(req,res)=>{
    res.send(View)
})

app.listen(8080,()=>{
    console.log("server starts")
})