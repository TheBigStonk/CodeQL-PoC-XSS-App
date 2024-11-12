import React, { useState } from 'react';
import './LowerCaseTextForm.css';

const LowerCaseTextForm = () => {
  const [inputText, setInputText] = useState('');
  const [lowerCaseText, setLowerCaseText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLowerCaseText(inputText.toLowerCase());
  };

  return (
    <div className="LowerCaseTextForm">
      <h3>Make Text Lowercase</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your crazy text here!"
        />
        <button type="submit">Convert!</button>
      </form>
      {lowerCaseText && (
        <div
          className="output"
          dangerouslySetInnerHTML={{ __html: lowerCaseText }}
        />
      )}
    </div>
  );
};

export default LowerCaseTextForm;
