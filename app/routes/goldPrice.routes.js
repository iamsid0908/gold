const GoldPriceController=require("../controller/goldPrice.controller")
module.exports=app=>{
    app.get("/api/goldprice",GoldPriceController.getGold)
    app.put("/api/goldprice/:id",GoldPriceController.updatePrice)
}