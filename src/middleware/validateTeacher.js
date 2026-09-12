module.exports = (req, res, next) => {
  console.log("Middleware executed");

  const {
    name,
    age,
    gender,
    department,
    subject,
    experience,
    salary,
    email,
    phone,
  } = req.body;

  if (
    !name ||
    !age ||
    !gender ||
    !department ||
    !subject ||
    !experience ||
    !salary ||
    !email ||
    !phone
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  next();
};