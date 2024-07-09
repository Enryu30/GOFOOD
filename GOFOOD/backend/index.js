const express = require('express');
const app=express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
/* const model = require("./models/User");
 */

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

//above thing to handle cors error, happens when we try to send data frontend=>vackend

app.use(express.json());


app.get('/',(req,res)=>{
  res.send('hello world');
})

app.use('/api',require("./Routes/CreatUser"));

app.use("/api",require("./Routes/DisplayData"));

app.listen(port,()=>{
  console.log("Server is listening on port" + port);
})







//25:33 he tells that its not good to have all the request from the server so  we created a routes folder .