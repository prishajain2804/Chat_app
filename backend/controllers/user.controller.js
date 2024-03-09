import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try{

        const loggedInUserID = req.user._id;

        const filterUsers = await User.find({_id: { $ne :loggedInUserID}}).select("-password") //give all userds other than the logged in one

         res.status(200).json(filterUsers)
    }catch(error){
        console.error("Error in getUserForSidebar: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}