import React from 'react';
import X from '../Assets/Images/x.svg';

function List({ items, deleteListItem }) {
  let list = items.map( (item, index) => {
    return (
      <li className="List-item" key={ index }>
        { item }
        <img  src={ X } 
              className="Button-close"
              onClick={ () => deleteListItem(index) } 
              alt="Delete post"
        />
      </li>
    )
  });

  return(
    <ul className="List">
      { list }
    </ul>
  );
}

export default List;