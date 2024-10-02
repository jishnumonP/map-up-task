import { useState, useEffect } from 'react';
import axios from 'axios';

const DataTable = ({ filter }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/data?page=${page}&filter=${filter}`);
                setData(res.data);
            } catch (err) {
                console.error('Error fetching data', err);
            }
        };
        fetchData();
    }, [page, filter]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
    );
};

export default DataTable;
