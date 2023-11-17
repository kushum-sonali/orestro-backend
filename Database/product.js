const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        varified:false,
        required:true
    },
    email:{
        type:String,
        unique:true,
        varified:false,
        required:true,

    },
    password:{
        type:String,
        required:true,
    
    },
    isvarified:{
        type:Boolean,
        default:false,
    }
},
{
timestamps:true
});
module.exports = mongoose.model('User',userSchema);