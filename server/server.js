const express = require("express");
const  userRouter  = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
require("./config/db");
const cors = require('cors');
const urlencoded = require("express");

const app = express();

app.use(cors ({ credentials: true, origin: "https://verdant-faloodeh-779433.netlify.app"})
);


app.set("view engine","ejs");
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRouter);

app.use("/api",(req,res,next) =>{
    res.send("hello")
})
app.use(urlencoded({extended : true}));
app.set("trust proxy");

//define port

app.listen(3001, () => console.log("app started at 3001..."));