const express = require("express");
const cors = require("cors");           // <-- Add this
require("dotenv").config();

const connectDB = require("./config/database");

const app = express();

const studentRoutes = require("./routes/student.routes");
const teacherRoutes = require("./routes/teacher.routes");

const PORT = process.env.PORT || 6969;

// Enable CORS
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Student Management Backend API is running 🚀"
    });
});

// Register routes
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});