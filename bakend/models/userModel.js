import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add username"]
    },
    email:{
        type:String,
        required : [true,"please add email"],
        unique : [true, "email address taken"]
    },
    password:{
        type : String,
        required: [true,"plaase  enter password"]
    }
},
{
    timestamps:true
}
)

export const User =mongoose.model("User",userSchema)