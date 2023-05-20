const mongoose=require("mongoose")
const goldPriceSchema=new mongoose.Schema({
    goldprice:{
        type:Number,
        default:0
    },
    range:[0]
})
module.exports=mongoose.model("GoldPrice",goldPriceSchema)