import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeacherById } from "../services/teacherService";

function TeacherProfile() {
    const { id } = useParams();

    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        fetchTeacher();
    }, []);

    async function fetchTeacher() {
        try {
            const response = await getTeacherById(id);
            setTeacher(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!teacher) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Teacher Profile</h1>

            <hr />

            <h2>{teacher.name}</h2>

            <p><strong>Email:</strong> {teacher.email}</p>
            <p><strong>Age:</strong> {teacher.age}</p>
            <p><strong>Gender:</strong> {teacher.gender}</p>
            <p><strong>Department:</strong> {teacher.department}</p>
            <p><strong>Salary:</strong> {teacher.salary}</p>
            <p><strong>Phone:</strong> {teacher.phone}</p>
        </div>
    );
}

export default TeacherProfile;