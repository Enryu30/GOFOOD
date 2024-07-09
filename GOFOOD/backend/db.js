const mongoose =require ('mongoose');
const mongoURI = 'mongodb+srv://swarat:Kr24lvcMY72xampr@cluster0.tclfdjf.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB=async ()=>{


  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the Database");
    
    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const foodCategoryCollection = mongoose.connection.db.collection("food_category");

    const foodItemsCursor = foodItemsCollection.find();
    const foodCategoryCursor = foodCategoryCollection.find();

    const foodItems = [];
    await foodItemsCursor.forEach(item => {
      foodItems.push(item);
    });

    const foodCategories = [];
    await foodCategoryCursor.forEach(catData => {
      foodCategories.push(catData);
    });

    global.food_items = foodItems;
    global.foodCategory = foodCategories;

  } catch (error) {
    console.error("Database connection or data fetching error: ", error);
  }

}

module.exports = mongoDB;


//Here we created a function that connects to the database and exported that function. Which can be used in index.js to connect by calling.
