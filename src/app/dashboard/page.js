import { useEffect, useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';

export default function DashboardPage() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    setRole(storedRole);
  }, []);

  if (!role) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {role === 'admin' && <AdminDashboard />}
      {/* Add manager and user dashboards similarly */}
    </div>
  );
}
