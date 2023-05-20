const goldPriceSchema=require("../model/goldPrice.model")

exports.getGold=(req,res)=>{
    goldPriceSchema.find({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send({message:err.message})
    })
}

exports.updatePrice= async(req,res)=>{
try{
    const {goldprice}=req.body;
   
    const val=req.body.goldprice
    const user=await goldPriceSchema.findByIdAndUpdate(req.params.id,{goldprice })
    
    if(!user){
        return res.send({message:"user not found"})
    }
    
    if(range.length<5){
        user.range.push(goldprice)
    }else{
        range.shift()
        range.splice(3,0,goldprice);
    }
    

    

    
    await user.save()  
    user
    res.status(200).json({ message: "Gold price updated successfully" ,user});
    
}
catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}