# gold

gold Product <br>
***app.get("/api/goldrate");***   ( we can fetch all the product by this route) <br>
***app.post("/api/product")***    ( we can create product from this route )  <br>

***{<br>
    "name":"diamond",<br>
    "weight":"101"   <br>
}***<br>
input formate

gold price <br>

***app.get("/api/goldprice")***  (fetch price of the gold)<br>
    ****app.put("/api/goldprice/:id")***  (can change the gold price by the id who created) <br>
    input<br>
***{<br>
    "goldprice":3101115<br>
}***<br>

output
 ***"user": {<br>
        "_id": "6467c1bc2a3a5fcb985db736",<br>
        "goldprice": 3101115,<br>
        "range": [<br>
            310111,<br>
            310111,<br>
           ],<br>
        "__v": 7<br>
    }***<br>
    
    here range is how the gold price frequently changes we can show it on grap in front end

