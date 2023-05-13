import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000)
    }

    const postExpense = async () => {
      const response = await fetch('https://react-http-ba27d-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses.json', {
        method: 'POST',
        body: JSON.stringify(expenseData),
        headers: {
          'content-type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Something went wrong !');
      }
    }

    try {
      postExpense();
    } catch (error) {
      console.log(error);
    }
  }

  function startExpenseHandler() {
    setIsAddExpense(true);
  }

  function stopExpenseHandler() {
    setIsAddExpense(false);
  }

  return (
    <div className='new-expense'>
      {!isAddExpense && <button onClick={startExpenseHandler} className>Add New Expense</button>}
      {isAddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopExpenseHandler={stopExpenseHandler} />}
    </div>
  )
}

export default NewExpense;
