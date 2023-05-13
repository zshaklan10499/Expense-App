import React from 'react';
import "./ExpenseList.css";
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

if(props.filteredExpenses.length === 0){
   return  <h2 className='expenses-list__fallback'>No Expenses Found !!</h2>
}

  return (
    <div className='expenses-list'>
    {
        props.filteredExpenses.map(expense => 
        <ExpenseItem 
        key={expense.id}
        date={expense.date} 
        title={expense.title} 
        amount={expense.amount} />) 
    }
    </div>
  )
}

export default ExpenseList;
