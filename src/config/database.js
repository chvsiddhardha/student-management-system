const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/student-management");

        console.log("✅ MongoDB Connected");

    } catch (err) {

        console.error("❌ MongoDB Connection Failed");
        console.error(err.message);
        process.exit(1);

    }
};

module.exports = connectDB;