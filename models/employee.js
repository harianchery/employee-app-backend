const mongoose=require("mongoose")
const schema=mongoose.schema({
    "name":String,
    "id":String,
    "des":String,
    "cname":String
})

let employeemodel=mongoose.Model("employees",schema);
module.exports={employeemodel}