module.exports = (req, res, next) => {

    console.log("Middleware executed");

    const { name, age, department, cgpa, email } = req.body;

    if (!name || !age || !department || !cgpa || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    next();
};