const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req, res) => {
    try{
        res.status(200).send("Welcome to the Home page router");
    }
    catch(error){
        console.log(error);
    }
};

const register = async(req, res) => {
    try{
        console.log(req.body);

        const {username, email, phone, password} = req.body;    

        const userExist = await User.findOne({email}); 

        if(userExist){
            return res.status(400).json({message: "email already exists"});
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({msg: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
    }
    catch(error){
        // res.status(500).json("interval server error");
        next(error);
    }
};

const login = async(req, res) => {
    try{
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({msg: "Login Successfull", token: await userExist.generateToken(), userId: userExist._id.toString(),});
        }
        else{
            res.status(401).json({message: "Invalid email or password"});
        }
    }
    catch(error){
        res.status(500).json("internal server error")
    }
}

// to send user data 

const user = async (req, res) => {
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData});

    }
    catch(error){
        console.log(`error from the use route ${error}`);
    }
};

module.exports = { home, register, login, user };  