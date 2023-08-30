const mongoose = require('mongoose');

const connectDB = async () => {
    // Log the value of MONGO_URI
    console.log("Mongo URI:", process.env.MONGO_URI);

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
