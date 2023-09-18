const express= require("express")
const cors=require("cors")// cors ek policy hai jisme backend and frontend resourece share karte hai,restricted models .cors ek middleware hai jo express ke liye use hota hai  aur cors ek function hai jo ek object return karta hai jisme ek function hai jisme 3 parameter hai req,res,next                 
const path= require("path")
const app= express();//express ek function hai jo ek object return karta hai jisme ek function hai jisme 3 parameter hai req,res,next.....it is use as app in any hosted compurter.....route, middleware and callback functiion
require("./Database/config");
const User= require("./Database/product"); 
app.use(express.json());//ye ek middleware hai jo json data ko parse karta hai...accepts json data from client
app.use(cors());//https block karta hai aur cors http block karta hai
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken")
const bp= require("body-parser");
const port= process.env.port||5000; // process.env.port ye ek environment variable hai jo heroku ke liye use hota hai oe local host ke liye 3000 use hota hai   ..after host environment variable is set then we can use it as process.env.port 
app.get("/signup",async(req,res)=>{
     res.send("signup has benn succesfull"); 
})
// app.post("/signup",async(req,res)=>{
// const userexist= await User.findOne({email:req.body.email});
// if(userexist) return res.status(400).send("email already exist");
// const data= new User(req.body);


// const result= await data.save();
// res.send(result);
// console.log(result);
// }
app.post('/find',async(req,res,next)=>{
    try{ 
        const {input}=req.body;
        if(!input){
          return  res.send("input require");
        }
        
        const user=await User.findOne(
       {
        $or:[
              {email:input},
              {username:input}

        ]
       })
       if(!user) return res.status(200).send("user not found");
       console.log(user);
    //    const [...rest,password]=user._doc;

       res.send(user);
    }
    catch(err){

        console.log(err)
    }
})
// app.post("/insert",async(req,res,next)=>{
//     const user=await User.insertOne(
//         const {username}=req.body.username;

//     )
// })
app.get("/test",(req,res,next)=>{
   try{
    const {name,email}=req.query;
    if(!name || !email){
        return res.status(400).send("name and email are not exist")
    }
    res.send(name+email);

   }  
   catch(err){
    next(err);

   }
})
app.put("/test",(req,res,next)=>{
    try{

    }
    catch(err){
        next(err);
    }
})

app.post("/signup",async(req,res,next)=>{
try{
    const {username,email,phone,password}=req.body;
    console.log(req.body)
    if(!username || !email || !phone || !password){
        // console.log(req.body);
     return res.status(400).json({error:"required all field"})
    }
    const saltRounds=10;
   const hashpass= await bcrypt.hash(password, saltRounds);

    console.log(hashpass);
    const newuser= new User({
        username,
        email,
        phone,
        password:hashpass
    })

    const result=await newuser.save();
    console.log(result);

    res.status(200).json(result);
    // res.send(hashpass);

    // console.log(req.body);
    // res.send(req.body);

}
catch(err){
    next(err);
}
})
app.post("/login",async(req,res,next)=>{
    try{
        const {email,password}=req.body;   
        
        if( !email || !password){
            return res.status(400).send("require")
        }   
        const userfind= await User.findOne(
         {email}
        )
        
        if(!userfind){
         return res.status(404).send(" user not found")
        }  
        
        const matchpass= await  bcrypt.compare(password,userfind.password) ;
        if(!matchpass){
            return res.status(402).send("username or password not matched");
        }
            // return res.send("login succesfully");
      const token =  jwt.sign({name:userfind.username,
            email:userfind.email
        },"privetKey" ,{expiresIn: 60*60})
        console.log(token);
        res.status(200).json({token});
    }

    catch(err){
next(err);
    }
})


app.listen(port,()=>{//two parameter port and callback function
    console.log(`server is running at ${port}`)
})