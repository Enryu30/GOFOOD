const mongoose =require ('mongoose');
const mongoURI = 'mongodb+srv://swarat:Kr24lvcMY72xampr@cluster0.tclfdjf.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB=async ()=>{


  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the Database");
    
    const model =  mongoose.connection.db.collection("food_items");//act like model

    const data = model.find();
/* 
    data.forEach((item,key)=>{
      console.log(item.name);
    }) */

  } catch (err) {
    console.log("err");
  }

}

module.exports = mongoDB;


//Here we created a function that connects to the database and exported that function. Which can be used in index.js to connect by calling.
