import React from 'react';

function ListItem({ item }) {
  return (
    <li>
      { item }
      <button onClick={console.log("Hej")}> Delete </button>
    </li>
  );
}

export default ListItem;