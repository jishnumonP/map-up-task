import DataTable from './DataTable';

const ManagerDashboard = () => {
    return (
        <div>
            <h2>Manager Dashboard</h2>
            <DataTable filter="manager" />
        </div>
    );
};

export default ManagerDashboard;
