const express = require('express');
const connectDB = require('./database');
const cors = require('cors');

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(cors());
app.use(express.json());

//
app.use('/api/tasks', require('./routes/tasks'));

// Connect to MongoDB
connectDB();

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});