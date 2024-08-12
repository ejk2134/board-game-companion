import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResource } from '../redux/resourcesSlice';
import { RootState } from '../redux/store';

const ResourceGrid: React.FC = () => {
    const dispatch = useDispatch();
    const resources = useSelector((state: RootState) => state.resources);

    const columns: Array<'brick' | 'grain' | 'lumber' | 'ore' | 'wool'> = ["brick", "grain", "lumber", "ore", "wool"];
    const rows: Array<'2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'> = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const colors: Array<'blue' | 'red' | 'orange' | 'white'> = ["blue", "red", "orange", "white"];

    const handleChange = (row: string, resource: 'brick' | 'grain' | 'lumber' | 'ore' | 'wool', color: 'blue' | 'red' | 'orange' | 'white', value: number) => {
        dispatch(updateResource({ row, resource, color, value }));

        // Log the entire state of resources after the update
        console.log('Updated resources state:', resources);
    };

    return (
        <table style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black' }}></th>
                    {columns.map((col, index) => (
                        <th key={index} style={{ border: '1px solid black', padding: '5px' }}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{row}</td>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} style={{ border: '1px solid black', padding: '5px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
                                    {colors.map((color, colorIndex) => (
                                        <input
                                            key={colorIndex}
                                            type="number"
                                            min="0"
                                            value={resources[row][col][color]}
                                            onChange={(e) =>
                                                handleChange(row, col, color, parseInt(e.target.value) || 0)
                                            }
                                            style={{
                                                backgroundColor: color,
                                                color: color === "white" ? "black" : "white",
                                                padding: '3px',
                                                border: 'none',
                                                width: '40px',
                                                textAlign: 'center',
                                                fontSize: '12px',
                                                opacity: resources[row][col][color] === 0 ? 0.4 : 1
                                            }}
                                        />
                                    ))}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResourceGrid;