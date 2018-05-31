import React from 'react';
import Button from './Button';

function List({ items, deleteListItem }) {
  let list = items.map( (item, index) => {
    return (
      <li key={index}>
        { item }
        <Button handleChange={ () => deleteListItem(index) } value="Delete" />
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