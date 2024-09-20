
const express = require('express');
const cors = require('cors'); // Add this for CORS handling
const app = express();
const port = 4001;
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

