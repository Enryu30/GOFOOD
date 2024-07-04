const express = require('express');
const app=express();
app.use(express.json());
const port = 5000;
const mongoDB = require("./db");
mongoDB();
/* const model = require("./models/User");
 */

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.use('/api',require("./Routes/CreatUser"));

app.listen(port,()=>{
  console.log("Server is listening on port" + port);
})







//25:33 he tells that its not good to have all the request from the server so  we created a routes folder .