const e = require('express');
const mongoose = require('mongoose');

const mongoDB = async () => {
  const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.hiuuw.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI

  try {
    // Using await to connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
    
     // Fetch data from the 'food' collection
     const fetched_data = await mongoose.connection.db.collection("food").find({}).toArray();
    
     console.log(); // Logs the data to the terminal
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;



//video wla ha


// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://gofood:gofood123@cluster0.hiuuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
   
//         // Use await to connect to MongoDB
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true}, async (err, result)=>{
//                 if(err)
//                     console.log("---" ,err)
//                 else{
//                     console.log("connected")
//                 }
//             }
            
//         );
        
//     }


// module.exports = mongoDB();
