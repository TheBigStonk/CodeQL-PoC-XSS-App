import React, { useState } from 'react';
import './UpperLowerTextForm.css';

const UpperLowerTextForm = () => {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransformedText(alternateCase(inputText));
  };

  const alternateCase = (text) => {
    return text
      .split('')
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');
  };

  return (
    <div className="UpperLowerTextForm">
      <h3>Make Text Wavy</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text"
        />
        <button type="submit">Submit</button>
      </form>
      {transformedText && (
        <textarea
          readOnly
          value={transformedText}
          rows="4"
          cols="50"
        />
      )}
    </div>
  );
};

export default UpperLowerTextForm;
