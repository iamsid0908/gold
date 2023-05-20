const Gold=require("../model/gold.model")
const goldPriceSchema=require("../model/goldPrice.model")
exports.getGolddata=(req,res)=>{
    Gold.find({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.createProduct=(req,res,next)=>{
    console.log()
    const p=goldPriceSchema.findOne(goldprice);
    const gold = new Gold({
        product: [
          {
            name: req.body.name,
            weight: req.body.weight,
            
            price:req.body.weight*p
          }
        ]
      })
      console.log(p);
      gold.save()

    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}