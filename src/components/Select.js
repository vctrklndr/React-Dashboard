import React from "react";

function Select({ items, fetchCurrency, latestUpdate }) {
  let option = items.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <select
      className="select"
      onChange={e => {
        fetchCurrency(e.target.value), latestUpdate();
      }}
    >
      {option}
    </select>
  );
}

export default Select;
