import React from 'react';

const FieldSelector = ({ onAddField }) => {
  const fieldTypes = ['Text', 'Dropdown', 'Radio', 'File', 'Checkbox', 'Country', 'Date', 'Phone'];
  
  return (
    <div>
      <h3>Select Field Type</h3>
      <select onChange={(e) => onAddField(e.target.value)}>
        <option value="">Select...</option>
        {fieldTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default FieldSelector;