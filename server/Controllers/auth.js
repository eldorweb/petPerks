const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





exports.register = async(req, res) => {
    try {
        const {username, email, password} = req.body;
        const exitingEmail = await User.findOne({email});

        if(exitingEmail){
            return res.status(400).json({error: "User already exits"});
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username, email, password: hashPassword});
        newUser.save();
        res.status(200).json({message: "User registered."})
    } catch (error) {
        res.status(500).json({error: "Registration failed"});
    }
}



exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({error: "Email is not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid Password"});
        
        res.status(200).json({message: "Login succesfull."})
    } catch (error) {
        res.status(500).json({error: "Login failed"});
        
    }
}
