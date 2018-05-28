import React from 'react';

function List({ items }) {
  let list = items.map( (item, index) => {
    return(
      <li key={ index } item={ item }>
        { item }
        <button className="deleteButton" 
                onClick={ 
                  function() { 
                    console.log(index);
                    console.log(items);
                    console.log(list);
                    items.splice(index, 1);
                  }
                }> Delete </button>
      </li>)
  });

  return(
    <ul>
      { list }
    </ul>
  );
}

export default List;