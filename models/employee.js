const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":String,
    "id":String,
    "des":String,
    "cname":String
})

let employeemodel=mongoose.Model("employees",schema);
module.exports={employeemodel}