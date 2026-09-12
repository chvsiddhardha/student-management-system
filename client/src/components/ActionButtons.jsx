import { Link } from "react-router-dom";

function ActionButtons({ studentId, onDelete }) {

    return (
        <>
            <Link to={`/profile/${studentId}`}>
                <button>View</button>
            </Link>

            <Link to={`/students/edit/${studentId}`}>
                <button>Edit</button>
            </Link>

            <button onClick={() => onDelete(studentId)}>
                Delete
            </button>
        </>
    );
}

export default ActionButtons;