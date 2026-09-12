const teacherService = require("../services/teacher.service");

exports.getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await teacherService.getAllTeachers(req.query);
    return res.status(200).json(teachers);
  } catch (err) {
    next(err);
  }
};

exports.getTeacherById = async (req, res, next) => {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    return res.status(200).json(teacher);
  } catch (err) {
    next(err);
  }
};

exports.createTeacher = async (req, res, next) => {
  try {
    const teacher = await teacherService.createTeacher(req.body);

    return res.status(201).json({
      message: "Teacher created successfully",
      teacher,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTeacher = async (req, res, next) => {
  try {
    const teacher = await teacherService.updateTeacher(
      req.params.id,
      req.body
    );

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    return res.status(200).json({
      message: "Teacher updated successfully",
      teacher,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await teacherService.deleteTeacher(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    return res.status(200).json({
      message: "Teacher deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};