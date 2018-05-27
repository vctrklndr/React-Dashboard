import React from 'react';

function List({ items }) {
  let list = items.map( (item, index) => {
    return(
      <li key={ index } item={ item }>
        { item }
        <button className="deleteButton" 
                onClick={ 
                  function() { 
                    console.log(items);
                  } }
          >
          Delete
        </button>
      </li>)
  });

  return(
    <ul>
      { list }
    </ul>
  );
}

export default List;