const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeModel = require("./Models/employee");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nabeelsaji1:511UXWpFxl9g2GNM@cluster0.h4tfc.mongodb.net/imtiaz"
);

app.get("/get", async (req, res) => {
  try {
    const data = await employeeModel.find();
    return res.status(200).json({
      data,
      message: "Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/add", async (req, res) => {
  // const firstname=req.body.firstname;
  // const lastname=req.body.lastname;
  // const email=req.body.email;

  // employeeModel.create({
  //     firstname:firstname,
  //     lastname:lastname,
  //     email:email
  // }).then(result=>res.json(result))
  //   .catch(err=>res.json(err))

  try {
    const { firstname, lastname, email } = req.body;

    const data = await employeeModel.create({ firstname, lastname, email });

    return res.status(200).json({
      data,
      message: "Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("server is runing");
});
