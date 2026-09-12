const Teacher = require("../models/teacher.model");

exports.getAllTeachers = async (filters) => {
  return await Teacher.find(filters);
};

exports.getTeacherById = async (id) => {
  return await Teacher.findById(id);
};

exports.createTeacher = async (teacherData) => {
  return await Teacher.create(teacherData);
};

exports.updateTeacher = async (id, teacherData) => {
  return await Teacher.findByIdAndUpdate(id, teacherData, {
    new: true,
    runValidators: true,
  });
};

exports.deleteTeacher = async (id) => {
  return await Teacher.findByIdAndDelete(id);
};