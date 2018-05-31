import React from 'react';
 
function InputField({ handleChange, handleSubmit, value, placeholder }) {
  return (
    <input  type="text"
            name="name"
            id="postItInput"
            className="input"
            value={value} 
            onChange={ handleChange }
            onKeyDown={ handleSubmit }
            placeholder={placeholder}
    />
  );
}

export default InputField;