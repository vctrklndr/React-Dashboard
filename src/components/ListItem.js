import React from 'react';

function ListItem({ item }) {
  return (
    <li>
      { item }
      <button className="button">Delete</button>
    </li>
  );
}

export default ListItem;