import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../services/studentService";
import { getTeachers } from "../services/teacherService";

function Dashboard() {
    const [studentCount, setStudentCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCounts();
    }, []);

    async function fetchCounts() {
        try {
            const [studentsRes, teachersRes] = await Promise.all([
                getStudents(),
                getTeachers(),
            ]);
            setStudentCount(studentsRes.data.length);
            setTeacherCount(teachersRes.data.length);
        } catch (error) {
            console.log("Failed to fetch counts:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Student Management System</h1>

            <hr />

            <h2>Dashboard</h2>

            <div>
                <Link to="/students">
                    <button>
                        Students {loading ? "(...)" : `(${studentCount})`}
                    </button>
                </Link>

                <br /><br />

                <Link to="/teachers">
                    <button>
                        Teachers {loading ? "(...)" : `(${teacherCount})`}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;