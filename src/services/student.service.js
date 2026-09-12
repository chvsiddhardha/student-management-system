const Student = require("../models/student.model");
 
// Get All Students
exports.getAllStudents = async (filters) => {

    if (filters) {
        return await Student.find(filters);
    }

    return await Student.find();

};

// Get Student By Id (We'll convert this in the next lesson)
exports.getStudentById = async (id) => {

    const student = await Student.findById(id);

    return student;

};

// Create Student
exports.createStudent = async (studentData) => {

    const student = await Student.create(studentData);

    return student;

};

// Update Student (We'll convert this in the next lesson)
exports.updateStudent = async (id, studentData) => {

    return await Student.findByIdAndUpdate(
        id,
        studentData,
        {
            new: true,
            runValidators: true
        }
    );

};

// Delete Student (We'll convert this in the next lesson)
exports.deleteStudent = async (id) => {

    const deletedStudent = await Student.findByIdAndDelete(id);

    return deletedStudent;

};
exports.getStudentByEmail=async (email)=>{
    return await Student.findOne({email})
};
exports.getBasicStudentDetails = async ()=>{
    return await Student.find().select("name email");
};
exports.getStudentsSortedByCgpa = async ()=>{
    return await Student.find().sort({cgp: -1});
};