import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseForm = ({
  selectedExpense,
  setSelectedExpense,
  fetchExpenses,
}) => {
  const [date, setDate] = useState(getCurrentDate());
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const token = localStorage.getItem("token");

  // Function to get the current date in 'YYYY-MM-DD' format
  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    // add leading zeros to day and month if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // create the date string in date-month-year format
    const dateStr = `${formattedDay}-${formattedMonth}-${year}`;
    return dateStr;
  }

  useEffect(() => {
    if (selectedExpense) {
      setDate(selectedExpense.date || getCurrentDate());
      setExpenseAmount(selectedExpense.expenseAmount);
      setExpenseDescription(selectedExpense.expenseDescription);
      setExpenseCategory(selectedExpense.expenseCategory);
    } else {
      setDate(getCurrentDate()); // Reset date to current date when no expense is selected
    }
  }, [selectedExpense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = {
      date,
      expenseAmount,
      expenseDescription,
      expenseCategory,
    };

    try {
      if (selectedExpense) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/expense/edit-expense/${selectedExpense._id}`,
          expenseData,
          {
            headers: { Authorization: token },
          }
        );
        setSelectedExpense(null);
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/expense/add-expense`,
          expenseData,
          {
            headers: { Authorization: token },
          }
        );
      }
      fetchExpenses();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating expense:", error);
    }
  };

  const resetForm = () => {
    setDate(getCurrentDate());
    setExpenseAmount("");
    setExpenseDescription("");
    setExpenseCategory("");
    setSelectedExpense(null);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex p-2">
      <input type="hidden" value={date} />

      <div className="input-group mb-3 d-flex m-4">
        <span className="input-group-text">Expense Amount</span>
        <input
          type="number"
          className="form-control"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          id="expenseAmount"
          name="expenseAmount"
          required
        />
      </div>

      <div className="input-group mb-3 d-flex m-4">
        <span className="input-group-text">Description</span>
        <input
          type="text"
          className="form-control"
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
          id="expenseDescription"
          name="expenseDescription"
          required
        />
      </div>

      <div className="input-group mb-3 d-flex m-4">
        <span className="input-group-text">Category</span>
        <select
          className="form-select"
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
          id="expenseCategory"
          name="expenseCategory"
          required
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>
      </div>

      <div className="mb-3 d-flex m-4">
        <button id="submitBtn" type="submit" className="btn btn-primary">
          {selectedExpense ? "Update Expense" : "Add Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
