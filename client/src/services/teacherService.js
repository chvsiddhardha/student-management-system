import api from "./api";

export const getTeachers = () => {
    return api.get("/teachers");
};

export const getTeacherById = (id) => {
    return api.get(`/teachers/${id}`);
};

export const createTeacher = (teacherData) => {
    return api.post("/teachers", teacherData);
};

export const updateTeacher = (id, teacherData) => {
    return api.put(`/teachers/${id}`, teacherData);
};

export const deleteTeacher = (id) => {
    return api.delete(`/teachers/${id}`);
};
