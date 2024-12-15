const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const doSignUp= async (req, res) => {
    
    try{
        const {name,email,password}=req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                data: null,
                message: 'All fields are required',
            });
        }
        const userExists= await User.findOne({email:email})

        if(userExists){
            return res.json({
                data:null,
                message:'User already exists'
            })
        }

        const hashPassword= bcrypt.hashSync(password, 8)

        const newUser= new User({
            name:name,
            email:email,
            password:hashPassword
        })
        await newUser.save();
        res.json({
            data:newUser,
            message:'User created successfully'
        })
    }

    catch(err){
        res.json({
            data:null,
            message:'Failed to create user'
        })
    }

}

const doLogin= async (req, res) => {
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.json({
                data:null,
                message:'Please provide all credentials'
            })
        }

        const userFound= await User.findOne({email:email})

        if(!userFound){
            return res.json({
                data:null,
                message:'User not found'
            })
        }

        const isPasswordValid= bcrypt.compareSync(password, userFound.password)

        if(!isPasswordValid){
            return res.json({
                data:null,
                message:'Invalid password'
            })
        }

        const token= jwt.sign({_id:userFound._id,email:userFound.email}, process.env.SECRET_KEY)

        res.json({
            data:{
                token,
                email:userFound.email,
                name:userFound.name
            },
            message:'User logged in successfully'
        })


    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to login'
        })
    }
}


module.exports={
    doSignUp,
    doLogin
}