import React, { useState } from 'react';
import FieldSelector from './FieldSelector';
import Field from './Field';

const Form = () => {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    if (type) {
      setFields((prevFields) => [...prevFields, { type, id: Date.now() }]);
    }
  };

  return (
    <div>
      <h2>Dynamic Form Builder</h2>
      <FieldSelector onAddField={addField} />
      <form>
        {fields.map((field) => (
          <Field key={field.id} type={field.type} />
        ))}
      </form>
    </div>
  );
};

export default Form;