import React, { useState } from 'react';
import Field from './Field';

const Section = ({ sectionTitle, fields }) => {
  return (
    <div>
      <h3>{sectionTitle}</h3>
      {fields.map((field) => (
        <Field key={field.id} type={field.type} />
      ))}
    </div>
  );
};

export default Section;