import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpense = async () => {
      const response = await fetch(
        "https://todo-58c05-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch the expenses !");
      }

      const responseData = await response.json();

      let loadedExpenses = [];

      for (let key in responseData) {
        const date = new Date(responseData[key].date);

        loadedExpenses.unshift({
          id: key,
          title: responseData[key].title,
          date: date,
          amount: responseData[key].amount,
        });
      }
      setExpenses(loadedExpenses);
    };
    getExpense().catch((err) => {
      console.log(err.message);
    });
  }, [expenses]);

  return (
    <div className="new_expense">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
