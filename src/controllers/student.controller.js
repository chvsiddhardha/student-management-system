const studentService = require("../services/student.service");
exports.getAllStudents = async (req, res, next) => {

    try {

        const students = await studentService.getAllStudents(req.query);

        return res.status(200).json(students);

    } catch (err) {

        next(err);

    }

};


exports.getStudentById = async (req, res, next) => {

    try {

        const student = await studentService.getStudentById(req.params.id);

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        return res.status(200).json(student);

    } catch (err) {

        next(err);

    }

};

exports.createStudent = async (req, res, next) => {
    try {

        const student = await studentService.createStudent(req.body);

        return res.status(201).json({
            message: "Student created successfully",
            student
        });

    } catch (err) {

        next(err);

    }
};

exports.updateStudent = async (req, res, next) => {

    try {

        const updatedStudent = await studentService.updateStudent(
            req.params.id,
            req.body
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            message: "Student updated successfully",
            student: updatedStudent
        });

    } catch (err) {

        next(err);

    }

};

exports.deleteStudent = async (req, res, next) => {

    try {

        const deletedStudent = await studentService.deleteStudent(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (err) {

        next(err);

    }

};
exports.getStudentByEmail=async (req,res,next)=>{
    try{
        const student=await studentService.getStudentByEmail(req.params.email);

        if(!student){
            return res.status(404).json(
                {message:"Student not found"}
            );
        }
        return res.status(200).json(student);
    }
    catch(err){
        next(err);
    }
    
};
exports.getBasicStudentDetails = async (req,res,next) =>{
    try{
        const students= await studentService.getBasicStudentDetails();
        return res.status(200).json(students);
    }
    catch(err){
        next(err);
    }
};
exports.getStudentsSortedByCgpa = async (req, res, next) => {

    try {

        const students = await studentService.getStudentsSortedByCgpa();

        return res.status(200).json(students);

    } catch (err) {

        next(err);

    }

};