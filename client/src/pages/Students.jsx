import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getStudents,
    deleteStudent
} from "../services/studentService";

import StudentTable from "../components/StudentTable";

function Students() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    async function fetchStudents() {
        try {
            const response = await getStudents();
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteStudent(id);

            alert("Student deleted successfully!");

            // Refresh student list
            fetchStudents();

        } catch (error) {

            console.log(error);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Delete failed");
            }

        }
    }

    return (
        <div>

            <h1>Students</h1>

            <div style={{ marginBottom: "20px" }}>
                <Link to="/students/create">
                    <button>Add Student</button>
                </Link>
            </div>

            <StudentTable
                students={students}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default Students;