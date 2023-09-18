const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0/models",{

    useNewUrlParser:true,

    useUnifiedTopology:true,
    
  
    }).then(()=>{
        console.log("connection is successful");
    }
    
    ).catch((e)=>{
        console.log(e);
    }
    )
