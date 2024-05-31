import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { rowWithColumnNames } = location.state || {};

    const [formData, setFormData] = useState(rowWithColumnNames || {});

    const handleChange = (e, columnName) => {
        setFormData({
            ...formData,
            [columnName]: e.target.value
        });
    };

    const handleSave = async () => {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzLalsZNUy1PHNUV3g3crz3IMWM1zhgIg326x1ALpMLcMZ5Pf_DO9TNyRytOZ9YQ3Yf/exec', {
                method: 'POST', // Using POST since doPost handles both
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                console.log(formData);
                throw new Error('Network response was not ok');
            }
            navigate('/');
        } catch (error) {
            console.error('Error during the patch request:', error);
        }
    };

    if (!rowWithColumnNames) {
        return <p>No data available to edit.</p>;
    }

    return (
        <div className="container mt-12">
            <h1 className="text-3xl font-bold mb-4 text-cyan-300">Edit Data</h1>
            <form>
                {Object.entries(formData).map(([columnName, value], index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            {columnName}
                        </label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(e, columnName)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditPage;
