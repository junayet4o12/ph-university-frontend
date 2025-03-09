import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'admin',
        element: <ProtectedRoutes><App /></ProtectedRoutes>,
        children: routeGenerator(adminPaths)
    },
    {
        path: 'faculty',
        element: <App />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: 'student',
        element: <App />,
        children: routeGenerator(studentPaths)
    },

    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default router
