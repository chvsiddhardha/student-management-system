const express = require("express");
const router = express.Router();

// Fixed the typo here:
const teacherController = require("../controllers/teacher.controller");
const validateTeacher = require("../middleware/validateTeacher");

router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.post("/", validateTeacher, teacherController.createTeacher);
router.put("/:id", validateTeacher, teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

module.exports = router;