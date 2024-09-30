const mongoose=require('mongoose')

//creating schema
const serviceSchema=new mongoose.Schema(
    {
        serviceName:{
            type:String,
        },
        description:{
            type:String,
        },
        price:{
            type:Number,
        }
        
    }
    
)
//exporting model
module.exports=mongoose.model("service",serviceSchema)