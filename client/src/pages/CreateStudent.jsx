import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/studentService";

function CreateStudent() {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        age: "",
        department: "",
        cgpa: "",
        email: ""
    });

    function handleChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await createStudent(student);

            alert("Student created successfully!");

            navigate("/students");
        } catch (error) {
            console.log(error);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Failed to create student");
            }
        }
    }

    return (
        <div>
            <h1>Create Student</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Age</label>
                    <br />
                    <input
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Department</label>
                    <br />
                    <input
                        type="text"
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>CGPA</label>
                    <br />
                    <input
                        type="number"
                        step="0.01"
                        name="cgpa"
                        value={student.cgpa}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Create Student
                </button>

            </form>
        </div>
    );
}

export default CreateStudent;