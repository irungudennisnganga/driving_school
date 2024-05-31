// Display.js
import React, { useState, useEffect } from 'react';
import './Display.css'; 

const scriptURL = 'https://script.google.com/macros/s/AKfycbx-9zjHDo1_Mll8vQFFi6OtgcB8Hnx_JoF4cvkAPj-OBxd6cGcy378IRjDUpu3HqB6h/exec';

const Display = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Create a callback function name dynamically
                const callbackName = 'jsonpCallback_' + Math.round(100000 * Math.random());

                // Create a script element
                const script = document.createElement('script');

                // Define the callback function in the global scope
                window[callbackName] = (responseData) => {
                    setData(responseData);
                    setLoading(false);
                    delete window[callbackName]; // Clean up: remove the callback function
                };

                // Set the script source to the Google Apps Script URL with the callback parameter
                script.src = `${scriptURL}?callback=${callbackName}`;

                // Append the script to the document to initiate the JSONP request
                document.body.appendChild(script);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                        {data.slice(1).map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">{cell}</td>
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
