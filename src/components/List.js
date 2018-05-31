import React from 'react';
import Button from './Button';

function List({ items, handleChange, deleteListItem }) {
  let list = items.map( (item, index) => {
    return (
      <li key={ index }>
        { item }
        <Button className="deleteButton" handleChange={ () => deleteListItem(index) } 
                value="Delete" 
        />
      </li>
    )
  });

  return(
    <ul>
      { list }
    </ul>
  );
}

export default List;