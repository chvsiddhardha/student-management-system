import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../services/studentService";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        email: ""
    });

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

    function handleChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await updateStudent(id, student);
            alert("Student updated successfully!");
            navigate("/students");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Edit Student</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">
                    Update Student
                </button>
            </form>
        </div>
    );
}

export default EditStudent;