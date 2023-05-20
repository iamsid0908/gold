const mongoose=require("mongoose")
const goldSchema=new mongoose.Schema({
   
    product:[{
        name:{
            type:String
        },
        weight:{
            type:Number
        },
        price:{
            type:Number
        }
    }]
})
module.exports=mongoose.model("Gold",goldSchema);