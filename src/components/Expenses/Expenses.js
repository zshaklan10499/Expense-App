import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");

    const saveSelectedYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
                    <ExpenseFilter filteredYear={filteredYear} onSaveSelectedYear={saveSelectedYear} />

                    <ExpensesChart expenses={filteredExpenses} />

                    <ExpenseList filteredExpenses={filteredExpenses} />
        </Card>
    )
}
export default Expenses;