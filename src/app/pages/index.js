import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [role, setRole] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (role) {
            localStorage.setItem('userRole', role);
            router.push('/dashboard');
        } else {
            alert('Please select a role');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
            </select>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
