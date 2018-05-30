import React from 'react';

function List({ items, onClick }) {
  let list = items.map( (item, index) => {
    return (
      <li key={index}>
        { item }
        <button className="button"
                onClick={onClick}
        >
          Delete
        </button>
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