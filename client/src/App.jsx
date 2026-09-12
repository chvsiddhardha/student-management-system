import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

// Student Pages
import Students from "./pages/Students";
import Profile from "./pages/Profile";
import CreateStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";

// Teacher Pages
import Teachers from "./pages/Teachers";
import TeacherProfile from "./pages/teacherProfile";

// Common Page
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* Student Routes */}
                <Route path="/students" element={<Students />} />

                <Route
                    path="/students/create"
                    element={<CreateStudent />}
                />

                <Route
                    path="/students/edit/:id"
                    element={<EditStudent />}
                />

                <Route
                    path="/profile/:id"
                    element={<Profile />}
                />

                {/* Teacher Routes */}
                <Route
                    path="/teachers"
                    element={<Teachers />}
                />

                <Route
                    path="/teachers/profile/:id"
                    element={<TeacherProfile />}
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;