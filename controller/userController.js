import User from "../models/User.js";


// get method, all users
export const fetch = async (req, res)=>{
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({message : "Users not Found."})
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

//get method , id
export const fetchbyid = async (req,res) => {
    try {
        const id = req.params.id;
        
        const userId = await User.findOne({_id:id})
        if (!userId){
            return res.status(404).json({message : "User not found."})
        }
        res.status(200).json(userId); 
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}


//post method
export const create = async(req, res)=>{

    console.log("first")
    try {
        const userData = new User( req.body);
        const {email} = userData;
        
        const userExist = await User.findOne({email})
        if (userExist){
            return res.status(400).json({message : "User already exists."})
        }
        
        const savedUser = await userData.save();
        res.status(200).json(savedUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Internal Server Error. "})
    }
}

//put method
export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
        
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

//delete method
export const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        
        await User.findByIdAndDelete(id);
        res.status(201).json({message : " User deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}