const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); //  jwt.sign(data,key);
const jwtSecret = "kamehamehakatoomjutsuboshi";
const { body, validationResult } = require("express-validator");

router.post(
  "/creatuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt =await bcrypt.genSalt(10);
    const secPassword =await bcrypt.hash(req.body.password, salt);
    console.log(secPassword);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
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

                  const legit= await bcrypt.compare(req.body.password,user.password);
                if(legit){
                  
                  const data={
                    user:{
                        id:user.id     // we have to sent a unique key of the user to generate auth token.
                    }
                  }

                  const authToken = jwt.sign(data,jwtSecret);
                  console.log(authToken);
                  console.log("User exists");
                  res.json({ success: true, authToken:authToken });
                }

         }
         

         
         
       } catch (err) {
         console.log("error logging in user");
         
       }  

})

module.exports = router;

//lec 7 validated user and added it ot database.
