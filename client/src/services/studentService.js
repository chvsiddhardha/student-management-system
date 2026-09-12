import api from "./api";

export const getStudents = () => {
    return api.get("/students");
};

export const getStudentById = (id) => {
    return api.get(`/students/${id}`);
};
export const updateStudent = (id, studentData) => {
    return api.put(`/students/${id}`, studentData);
};
export const createStudent = (studentData) =>{
    return api.post("/students", studentData);
}
export const deleteStudent = (id) => {
    return api.delete(`/students/${id}`);
}