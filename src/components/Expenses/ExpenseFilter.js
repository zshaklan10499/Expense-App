import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const saveFilteredYear = (event) => {
    props.onSaveSelectedYear(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.filteredYear} onChange={saveFilteredYear}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;