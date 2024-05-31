// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

// const EditDataPage = () => {
//     const { cellValue } = useParams(); // Get the cellValue from URL parameter
//     const [existingData, setExistingData] = useState({}); // State for existing data
//     const [newData, setNewData] = useState({}); // State for new data

//     useEffect(() => {
//         // Fetch existing data associated with the cellValue
//         fetchExistingData(cellValue);
//     }, [cellValue]);

//     const fetchExistingData = async (cellValue) => {
//         try {
//             // Fetch the existing data associated with the cellValue from your spreadsheet
//             const response = await fetch(`YOUR_SPREADSHEET_API_URL/${cellValue}`);
//             const data = await response.json();
//             // Store the existing data in state
//             setExistingData(data);
//             // Populate the new data with existing data
//             setNewData(data);
//         } catch (error) {
//             console.error('Error fetching existing data:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         // Update the new data as the input changes
//         setNewData({ ...newData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Make PATCH request to update the data in the spreadsheet
//             const response = await fetch('YOUR_SPREADSHEET_API_URL', {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newData),
//             });
//             // Handle response
//             console.log('Data updated successfully:', response);
//             // Optionally, navigate back to the Display page
//             // history.push('/display');
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1 className="text-3xl font-bold mb-4 text-cyan-300">Edit Data</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Render input fields for each data attribute */}
//                 {Object.entries(existingData).map(([key, value]) => (
//                     <div key={key}>
//                         <label htmlFor={key} className="title">{key}</label>
//                         <input
//                             type="text"
//                             id={key}
//                             name={key}
//                             value={newData[key] || value} 
//                             onChange={handleInputChange}
//                             className="border px-4 py-2"
//                         />
//                         <br /><br />
//                     </div>
//                 ))}
//                 <button type="submit" className="button">Save</button>
//             </form>
//         </div>
//     );
// };

// export default EditDataPage;
