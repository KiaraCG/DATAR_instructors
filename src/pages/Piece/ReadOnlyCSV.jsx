import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadOnlyCSV = ({ path = '' }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Fetch the CSV file content
        axios.get(path)
            .then(response => {
                const csvData = response.data;
                // Parse the CSV content into rows and columns
                const parsedData = csvData.split('\n').map(row => row.split(','));
                setRows(parsedData);
            })
            .catch(error => {
                console.error('Error fetching the CSV file:', error);
            });
    }, [path]);

    return (
        <div style={{ maxWidth: '90%', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                <tr>
                    {rows[0] && rows[0].map((header, index) => (
                        <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>
                            {header.trim()}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {cell.trim()}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReadOnlyCSV;
