import React, { useState } from 'react';
import { validateField } from '../utils/validation';

const Field = ({ type }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        const validationError = validateField(type, e.target.value);
        setError(validationError);
    };

    switch (type) {
        case 'Text':
            return (
                <div>
                    <label>Text</label>
                    <input type="text" value={value} onChange={handleChange} />
                    {error && <span>{error}</span>}
                </div>
            );
            case 'Date':
            return (
                <div>
                    <label>Date</label>
                    <input type="Date" checked={value} onChange={() => setValue(!value)} />
                </div>
            );
        case 'Dropdown':
            return (
                <div>
                    <label>Dropdown</label>
                    <select value={value} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                    </select>
                    {error && <span>{error}</span>}
                </div>
            );
        case 'Radio':
            return (
                <div>
                    <label>Radio</label>
                    <input type="Radio" checked={value} onChange={() => setValue(!value)} />
                </div>
            );
        case 'Checkbox':
            return (
                <div>
                    <label>Checkbox</label>
                    <input type="checkbox" checked={value} onChange={() => setValue(!value)} />
                </div>
            );
        case 'Phone':
            return (
                <div>
                    <label>Phone</label>
                    <input type="tel" value={value} onChange={handleChange} />
                    {error && <span>{error}</span>}
                </div>
            );
        // Add other cases for File, Date, Radio, etc.
        default:
            return null;
    }
};

export default Field;