const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hari:hari001@cluster0.ocavfn3.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // console.log(input)
    let employee=new employeemodel(input)
    employee.save()
    // console.log(employee)
    
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})



app.listen(8080,()=>{
    console.log("server started")


})
