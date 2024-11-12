import React, { useState } from 'react';
import './UpperCaseTextForm.css';

const UpperCaseTextForm = () => {
  const [inputText, setInputText] = useState('');
  const [upperCaseText, setUpperCaseText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpperCaseText(inputText.toUpperCase());
  };

  return (
    <div className="UpperCaseTextForm">
      <h3>Make Text Uppercase</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your crazy text here!"
        />
        <button type="submit">Convert!</button>
      </form>
      {upperCaseText && (
        <div className="output">
          {upperCaseText}
        </div>
      )}
    </div>
  );
};

export default UpperCaseTextForm;
