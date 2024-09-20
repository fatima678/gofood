const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://gofood:gofood123@cluster0.hiuuw.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        // Use await to connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true // Added to avoid deprecation warnings
        });
        console.log("connected");

        // Fetch data
        const fetched_data = await mongoose.connection.db.collection("food").find({}).toArray();
        global.food = fetched_data;
        const foodCat = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = foodCat
      
    } catch (err) {
        console.error("---", err);
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
//                     const fetched_data = await mongoose.connection.db.collection("food");
//                     fetched_data.find({}).toArray(function(err, data){
//                       if(err) console.log(err);
//                       else{
//                         global.food=data;
//                         console.log(global.foo)
//                       }
//                     })

//                 }
//             }
            
//         );
        
//     }


// module.exports = mongoDB();
