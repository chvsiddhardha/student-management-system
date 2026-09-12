import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeachers } from "../services/teacherService";

function Teachers() {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTeachers();
    }, []);

    async function fetchTeachers() {
        try {
            setLoading(true);
            setError(null);

            const response = await getTeachers();
            setTeachers(response.data);

        } catch (err) {
            console.error(err);
            setError("Failed to load teachers.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Loading Teachers...</h2>;
    }

    if (error) {
        return (
            <div>
                <h2>{error}</h2>
                <button onClick={fetchTeachers}>Retry</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Teachers</h1>

            {teachers.length === 0 ? (
                <h3>No teachers found.</h3>
            ) : (
                teachers.map((teacher) => (
                    <div
                        key={teacher._id}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >
                        <Link to={`/teachers/profile/${teacher._id}`}>
                            <h3>{teacher.name}</h3>
                        </Link>

                        <p>{teacher.email}</p>

                        <p>{teacher.department}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Teachers;