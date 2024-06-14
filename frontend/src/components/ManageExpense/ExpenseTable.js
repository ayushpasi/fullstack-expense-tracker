// src/components/ExpenseTable.js

import React from "react";
import axios from "axios";

const ExpenseTable = ({ expenses, setExpenses, selectExpense }) => {
  const token = localStorage.getItem("token");

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/expense/delete-expense/${id}`, {
        headers: { Authorization: token },
      });
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <table
      className="table table-hover table-responsive"
      style={{ width: "100%" }}
    >
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td>{expense.date}</td>
            <td>{expense.expenseAmount}</td>
            <td>{expense.expenseDescription}</td>
            <td>{expense.expenseCategory}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteExpense(expense._id)}
              >
                <i className="bi bi-trash"></i>
              </button>
              <button
                className="btn btn-primary"
                onClick={() => selectExpense(expense)}
              >
                <i className="bi bi-pencil-square"></i> Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
