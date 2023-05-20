const GoldController=require("../controller/gold.controller")

module.exports=app=>{
    app.get("/api/goldrate",GoldController.getGolddata);
    app.post("/api/product",GoldController.createProduct)
}