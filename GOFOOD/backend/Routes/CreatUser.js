const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/creatuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
      console.log("Successfully added user");
    } catch (err) {
      console.log("error creating a user");
      res.json({ success: false });
    }
  }
);

router.post("/login",async(req,res)=>{
  console.log(req.body.email);
    try {
         const user=  await User.findOne({email:req.body.email});
         console.log(user);

         if(user){
                if(req.body.password==user.password){
                  console.log("User exists");
                  res.json({ success: true });
                }

         }
         

         
         
       } catch (err) {
         console.log("error logging in user");
         
       }  

})

module.exports = router;

//lec 7 validated user and added it ot database.
