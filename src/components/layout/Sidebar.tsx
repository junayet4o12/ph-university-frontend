import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { TRole } from "../../types";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";





export default function Sidebar() {
    const user = useAppSelector(selectCurrentUser)
    let sidebarItems;
    const allRoles = {
        admin: 'admin',
        faculty: 'faculty',
        student: 'student'
    }

    switch (user?.role) {
        case allRoles.admin:
            sidebarItems = sidebarItemsGenerator(adminPaths, allRoles.admin as TRole)
            break;
        case allRoles.faculty:
            sidebarItems = sidebarItemsGenerator(facultyPaths, allRoles.faculty as TRole)
            break;
        case allRoles.student:
            sidebarItems = sidebarItemsGenerator(studentPaths, allRoles.student as TRole)
            break;

        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ height: '100vh', position: 'sticky', top: 0, left: 0 }}
        >
            <div className="demo-logo-vertical" />
            <div style={{ color: 'white', textAlign: 'center', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
}