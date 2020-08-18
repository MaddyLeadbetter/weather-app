import React from 'react';
import Select from 'react-select';
import './Dropdown.css';

const Dropdown = ({ options, onChange }) => (
    <Select
        className="dropdown"
        options={options}
        defaultValue={options[0]}
        onChange={onChange}
    />
)

export default Dropdown;