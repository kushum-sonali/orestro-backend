// const mongoose= require('mongoose');
// const teacherSchema= new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         varified:false
//     },
//     phone:{
//         type:String,
//         required:true,
//         unique:true,
//         varified:false
//     },
//     gender:{
//         type:String,
//         required:true
// //     },
//       degree:{
//         type:String,
//         required:true,
//        
//       },
//     subjects:{
//     type:Array,
//     required:true,
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     isvarified:{
//         type:Boolean,
//         default:false
//     }
// },

//     {      
//           timestamps:true
//     }
// )
// module.exports= mongoose.models("Teacher",teacherSchema);