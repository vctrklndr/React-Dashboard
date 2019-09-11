import React from 'react';
import X from '../Assets/Images/x.svg';

function List({ items, deleteListItem }) {
  let list = items.map( (item, index) => {
    return (
      <li key={ index }>
        { item }
        <img  src={ X } 
              id="closeButton"
              onClick={ () => deleteListItem(index) } 
              alt="Delete post"
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