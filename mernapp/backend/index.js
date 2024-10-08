
const express = require('express');
const cors = require('cors'); // Add this for CORS handling
const app = express();
const port = 4000;
const mongoDB = require('./db');

// Use cors middleware for handling CORS
app.use(cors({ 
    origin: 'http://localhost:5173', // Correct CORS origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Initialize the MongoDB connection
(async () => {
  await mongoDB();
})();

// Middleware to parse JSON request body
app.use(express.json());

// Use routes
app.use('/api', require('./Routes/CreateUsers'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//6 october
// const express = require('express');
// const cors = require('cors'); 
// const mongoDB = require('./db'); // Ensure your mongoDB connection file is set up correctly
// const app = express();
// const port = 4000;

// // Use CORS middleware for handling CORS
// app.use(cors({ 
//     origin: 'http://localhost:5173', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// // Initialize the MongoDB connection
// (async () => {
//     await mongoDB();
// })();

// // Middleware to parse JSON request body
// app.use(express.json());

// // Use routes
// app.use('/api', require('./Routes/CreateUsers'));
// app.use('/api', require('./Routes/DisplayData'));
// app.use('/api', require('./Routes/OrderData'));

// // Basic route for testing
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Error-handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ error: 'Something went wrong!' }); // Return JSON for errors
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
