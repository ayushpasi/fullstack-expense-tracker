// src/pages/Dashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Pagination from "./Pagination";

const ManageExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchExpenses();
  }, [currentPage, limit]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/expense/get-all-expenses/${currentPage}?limit=${limit}`,
        {
          headers: { Authorization: token },
        }
      );
      setExpenses(res.data.expenses);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Expense Tracker Dashboard</h1>
      <ExpenseForm
        selectedExpense={selectedExpense}
        setSelectedExpense={setSelectedExpense}
        fetchExpenses={fetchExpenses}
      />
      <ExpenseTable
        expenses={expenses}
        setExpenses={setExpenses}
        selectExpense={setSelectedExpense}
      />
      <div className="col-auto" style={{ maxWidth: "150px" }}>
        <label htmlFor="rowsPerPage" className="form-label">
          Rows per page:
        </label>
        <select
          id="rowsPerPage"
          className="form-select"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={handlePageChange}
      />
    </div>
  );
};

export default ManageExpense;
