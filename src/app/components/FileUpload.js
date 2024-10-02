import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully', res.data);
        } catch (err) {
            console.error('Error uploading file', err);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload CSV</button>
        </div>
    );
};

export default FileUpload;
