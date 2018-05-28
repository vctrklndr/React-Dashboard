import React from 'react';

/**
 * Destructuring inside the parameters, we can also just send down
 * 'props' and reference 'props.value' for example.
 */
 
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