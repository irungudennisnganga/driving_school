import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import './Display.css';

const scriptURL = 'https://script.google.com/macros/s/AKfycbx-9zjHDo1_Mll8vQFFi6OtgcB8Hnx_JoF4cvkAPj-OBxd6cGcy378IRjDUpu3HqB6h/exec';

const Display = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const history = useNavigate(); // Initialize useHistory hook

    useEffect(() => {
        const fetchData = async () => {
            try {
                const callbackName = 'jsonpCallback_' + Math.round(100000 * Math.random());
                const script = document.createElement('script');
                window[callbackName] = (responseData) => {
                    setData(responseData);
                    setLoading(false);
                    delete window[callbackName];
                };
                script.src = `${scriptURL}?callback=${callbackName}`;
                document.body.appendChild(script);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // const handleCellClick = (rowIndex, cellIndex) => {
    //     // Get the cell value
    //     const cellValue = data[rowIndex][cellIndex];
    //     // Navigate to EditDataPage with cellValue as URL parameter
    //     history(`/edit/${rowIndex}/${cellIndex}/${cellValue}`);
    // };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container">
            <h1 className="text-3xl font-bold mb-4 text-cyan-300">Spreadsheet Data</h1>
            <div className="overflow-x-auto">
                <table className="table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            {data.length > 0 && data[0].map((cell, index) => (
                                <th key={index} className="border px-4 py-2">{cell}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2" >{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Display;
