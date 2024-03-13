require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const User = require("./models/user-model");

// let's tackle cors
const corsOptions = {
    origin: "https://registration-full-stack.vercel.app/",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);   

const PORT = 5000;

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.get("/getAllUsers", async(req,res)=>{
    let data = await User.find();
    res.send(data)
})

connectDb().then(() => {
    app.listen(PORT, () => {    
        console.log(`server is running at port: ${PORT}`);
    });
});