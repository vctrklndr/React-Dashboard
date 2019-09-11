import React from "react";

function Select({ items, fetchCurrency, getCurrentDate }) {
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
        fetchCurrency(e.target.value), getCurrentDate();
      }}
    >
      {option}
    </select>
  );
}

export default Select;
