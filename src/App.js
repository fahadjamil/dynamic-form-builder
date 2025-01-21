import React, { useState } from 'react';
import Form from './components/Form';
import DataDisplay from './components/DataDisplay';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <h2>Form Data</h2>
      <DataDisplay data={formData} />
    </div>
  );
};

export default App;
