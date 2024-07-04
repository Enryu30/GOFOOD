const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/creatuser", async(req,res) =>{
console.log(req.body.name);
    try {
      /* await User.create({
        name:"Ram",
        password:"Hanuman",
        email:"Lakshaman@gmail.com",
        location:"Janakpuri"
      }) */

      res.json({success:true});
    } catch (err) {
      console.log("error creating a user");
      res.json({success:false});
    }
})

module.exports = router;