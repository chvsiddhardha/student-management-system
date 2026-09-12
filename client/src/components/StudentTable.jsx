import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";

function StudentTable({ students, onDelete }) {

    return (
        <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            width="100%"
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {students.map((student) => (
                    <tr key={student._id}>

                        <td>
                            <Link to={`/profile/${student._id}`}>
                                {student.name}
                            </Link>
                        </td>

                        <td>{student.email}</td>

                        <td>
                            <ActionButtons
                                studentId={student._id}
                                onDelete={onDelete}
                            />
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;