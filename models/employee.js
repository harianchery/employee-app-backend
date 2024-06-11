const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":{type:String,required:true},
    "id":{type:String,required:true},
    "des":{type:String,required:true},
    "cname":{type:String,required:true}
})

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}