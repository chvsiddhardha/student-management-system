const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controller");
const validateStudent = require("../middleware/validateStudent");

router.get("/", studentController.getAllStudents);

router.get("/basic", studentController.getBasicStudentDetails);
router.get("/sort/cgpa", studentController.getStudentsSortedByCgpa);

router.get("/email/:email", studentController.getStudentByEmail);

router.get("/:id", studentController.getStudentById);

router.post(
    "/",
    validateStudent,
    studentController.createStudent
);

router.put(
    "/:id",
    validateStudent,
    studentController.updateStudent
);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;