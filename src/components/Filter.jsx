import React from "react";

const Filter = ({ value, onChange }) => (
  <input
    className="serch"
    type="text"
    placeholder="   Search by name"
    value={value}
    onChange={onChange}
  />
);

export default Filter;
