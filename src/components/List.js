import React from 'react';

function List({ items, deleteListItem }) {
  let list = items.map( (item, index) => {
    return (
      <li key={index}>
        { item }
        <button onClick={() => deleteListItem(index)}> Delete </button>
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