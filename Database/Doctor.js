//   const { MinKey } = require('mongodb');
// const mongoose=require('mongoose');
//   const doctorSchema= new mongoose.Schema({
//     name:{
//       type:String,
//       required:true
//     },
//     phone:{
//       type:String,
//       unique:true,
//       varified:false,
//       required:true
//     },
//     email:{
//         type:String,
//         unique:true,
//         varified:false,
//         required:true
//     },
//     gender:String,
//     degree:{
//       type:String,
//       required:true,
      
//     },

//     specelist:{
//       type:Array,
//       required:true
//     },
//     address:String,
//     avaliablity:String,

//     password:{
//       type:String,
//       required:true
//     },
//    isvarified:{
//       type:Boolean,
//       default:false,
//    }

//   },
//   {
// timestamps:true,
//   })
 

//   module.export= mongoose.model("Dctor",doctorSchema);