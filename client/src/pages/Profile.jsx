import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../services/studentService";

function Profile() {
    const { id } = useParams();

    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetchStudent();
    }, []);

    async function fetchStudent() {
        try {
            const response = await getStudentById(id);
            setStudent(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!student) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Student Profile</h1>

            <hr />

            <h2>{student.name}</h2>

            <p>
                <strong>Email:</strong> {student.email}
            </p>

            <p>
                <strong>CGPA:</strong> {student.cgpa}
            </p>

            <p>
                <strong>Department:</strong> {student.department}
            </p>

            <p>
                <strong>Phone:</strong> {student.phone}
            </p>
        </div>
    );
}

export default Profile;