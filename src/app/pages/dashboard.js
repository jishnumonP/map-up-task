import { useEffect, useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import ManagerDashboard from '../components/ManagerDashboard';
import UserDashboard from '../components/UserDashboard';

const DashboardPage = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        setRole(storedRole);
    }, []);

    if (!role) return <p>Loading...</p>;

    return (
        <div>
            {role === 'admin' && <AdminDashboard />}
            {role === 'manager' && <ManagerDashboard />}
            {role === 'user' && <UserDashboard />}
        </div>
    );
};

export default DashboardPage;
