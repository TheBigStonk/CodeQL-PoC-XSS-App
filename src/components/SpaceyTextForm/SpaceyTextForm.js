import React, { useState } from 'react';
import './SpaceyTextForm.css';

const SpaceyTextForm = () => {
  const [inputText, setInputText] = useState('');
  const [spaceyText, setSpaceyText] = useState('');
  var unused = "meow";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpaceyText(spaceOutText(inputText));
  };

  const spaceOutText = (text) => {
    return text.split('').join(' ');
  };

  return (
    <div className="SpaceyTextForm">
      <h3>Make Text Spacey</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your crazy text here!"
        />
        <button type="submit">Convert!</button>
      </form>
      {spaceyText && (
        <div className="output">
          {spaceyText}
        </div>
      )}
    </div>
  );
};

export default SpaceyTextForm;
