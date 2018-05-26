import React from 'react';

function List({ items }) {
  let list = items.map( (item, index) => {
    return(
      <li key={ index } item={ item }>
        { item }
      </li>)
  });

  return(
    <ul>
      { list }
    </ul>
  );
}

export default List;