import React, { useReducer } from 'react';
import "./ExpenseForm.css";

const reducer = (state, action) => {
  if (action.type === 'TITLE') {
    return { ...state, title: action.value }
  }
  if (action.type === 'AMOUNT') {
    return { ...state, amount: action.value }
  }
  if (action.type === 'DATE') {
    return { ...state, date: action.value }
  }
  if (action.type === 'RESET') {
    return { title: '', amount: '', date: '' }
  }

  return state;
}

const ExpenseForm = (props) => {
  const [data, dispatch] = useReducer(reducer, {
    title: '',
    amount: '',
    date: ''
  });

  function titleChangeHandler(event) {
    dispatch({ type: 'TITLE', value: event.target.value });
  }

  function amountChangeHandler(event) {
    dispatch({ type: 'AMOUNT', value: event.target.value });
  }

  function dateChangeHandler(event) {
    dispatch({ type: 'DATE', value: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: data.title,
      amount: +data.amount,
      date: new Date(data.date)
    };
    props.onSaveExpenseData(expenseData);

    dispatch({ type: 'RESET' });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={data.title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={data.amount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} value={data.date} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.onStopExpenseHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;









