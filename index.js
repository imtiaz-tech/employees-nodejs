const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const employeeModel=require('./Models/employee')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://nabeelsaji1:511UXWpFxl9g2GNM@cluster0.h4tfc.mongodb.net/imtiaz')

app.get('/get',(req,res)=>{
    employeeModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.post('/add',(req,res)=>{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;

    employeeModel.create({
        firstname:firstname,
        lastname:lastname,
        email:email
    }).then(result=>res.json(result))
      .catch(err=>res.json(err))
    
})

app.listen(3001,()=>{
    console.log("server is runing")
})