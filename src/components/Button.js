import React from 'react';
 
function Button({ className, handleChange, value }) {
  return (
    <button className={ className }
            onClick={ handleChange }
    > { value } </button>
  );
}

export default Button;