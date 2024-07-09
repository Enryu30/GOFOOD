const express = require('express');
const router = express.Router();

router.post("/foodData",async(req,res)=>{

    try {
      console.log(global.foodCategory);
      res.send([global.food_items,global.foodCategory]);
    } catch (err) {
          console.log(err);
          res.send("SERVEr ERROR");
    }

})

module.exports = router;