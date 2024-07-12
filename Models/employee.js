const mongoose=require('mongoose')


const employeeSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String
})

const employeeModel=mongoose.model("employee",employeeSchema)

module.exports=employeeModel