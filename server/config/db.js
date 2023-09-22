const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://charul:charulsingh@cluster0.im21sko.mongodb.net/").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})