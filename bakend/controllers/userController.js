import asyncHandler from 'express-async-handler'
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt'
export const registerUser =asyncHandler( async(req,res) => {

     const {username,email,password} = req.body;
     
     if(!username , !email , !password){
          res.status(400)
          throw new Error("all fields are mandatory");
     }
     const userAvailable =await User.findOne({email})
      if (userAvailable){
          res.status(400)
          throw new Error("user already register");
      }  

      const hashedPassword = await bcrypt.hash(password,10)
      console.log(hashedPassword);
     const user = await User.create({
          username,
          email,
          password: hashedPassword
      })
      if(user){
          res.status(201)
           res.json({_id:user.id,email:user.email})
      }
      else{
          res.status(400)
          throw new Error("user data not valid");
      }
})

export const loginUser = asyncHandler(async(req,res) => {
     res.json({message:"user login"})
})

export const deleteUser =  asyncHandler(async(req,res) => {
     const user = await User.findByIdAndDelete(req.params.id);
     if(!user){
          res.status(401)
          throw new Error("user not found");
          
     }
     res.json({message:`delete user ${req.params.id}`})
})
export const currentUser = asyncHandler(async(req,res) => {
     const users=await User.find();
     console.log(users);
     res.status(200).json(users)
})
