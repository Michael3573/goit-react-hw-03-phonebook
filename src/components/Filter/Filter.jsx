import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    className={style.serch}
    type="text"
    placeholder="   Search by name"
    value={value}
    onChange={onChange}
  />
);

export default Filter;
