import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";




export const signup = async (req, res) =>{
    try{
        const {fullName,username,password,confrimPassword, gender} = req.body;

        if(password != confrimPassword){
            return res.status(400).json({error:"Passwords don't Match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }


        //HASH PASSWORD HERE

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)


        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName, 
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            //Generate JWT token here
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        });
        }else{
            res.status(400).json({error:"Invalid User data"})
        }


    }catch (error){
        console.log("Error in singup controller");

        res.status(500).json({error:"Internal server error"})
    }
}

export const login = (req, res) =>{
    console.log("loginUser")
}

export const logout = (req, res) =>{
    console.log("logUser")
}
