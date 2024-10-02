import DataTable from './DataTable';

const UserDashboard = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <DataTable filter="user" />
        </div>
    );
};

export default UserDashboard;
