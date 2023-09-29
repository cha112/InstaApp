const express = require("express");
const  userRouter  = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
require("./config/db");
const cors = require('cors');

const app = express();
app.use( (reg, res, next) => {
    res.setHeader (
    "Access -Control-Allow-Origin",
    "https://astounding-genie-e6519d.netlify.app"
);
res.setHeader (
    "Access -Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
);
    next();
});

app.use(cors ({ credentials: true, origin: "https://astounding-genie-e6519d.netlify.app"})
);


app.set("view engine","ejs");
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRouter);

app.use("/api",(req,res,next) =>{
    res.send("hello")
})

//define port

app.listen(3001, () => console.log("app started at 3001..."));