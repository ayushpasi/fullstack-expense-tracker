import React, { useState } from "react";
import axios from "axios";

const Reports = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [dailyExpenses, setDailyExpenses] = useState([]);
  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [totalDailyAmount, setTotalDailyAmount] = useState(0);
  const [totalMonthlyAmount, setTotalMonthlyAmount] = useState(0);

  const getToken = () => localStorage.getItem("token");

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${d.getFullYear()}`;
  };

  const formatMonth = (month) => {
    const m = new Date(month);
    return `${(m.getMonth() + 1).toString().padStart(2, "0")}`;
  };

  const getDailyReport = async (e) => {
    e.preventDefault();
    const token = getToken();
    const formattedDate = formatDate(date);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/premium/daily-report",
        { date: formattedDate },
        { headers: { Authorization: token } }
      );

      let total = 0;
      response.data.forEach((expense) => {
        total += expense.expenseAmount;
      });

      setDailyExpenses(response.data);
      setTotalDailyAmount(total);
    } catch (error) {
      console.error(error);
    }
  };

  const getMonthlyReport = async (e) => {
    e.preventDefault();
    const token = getToken();
    const formattedMonth = formatMonth(month);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/premium/monthly-report",
        { month: formattedMonth },
        { headers: { Authorization: token } }
      );

      let total = 0;
      response.data.forEach((expense) => {
        total += expense.expenseAmount;
      });

      setMonthlyExpenses(response.data);
      setTotalMonthlyAmount(total);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const downloadExpenses = async () => {
    const token = getToken();

    try {
      const response = await axios.get("/user/download", {
        headers: { Authorization: token },
      });

      if (response.status === 200) {
        const a = document.createElement("a");
        a.href = response.data.fileUrl;
        a.download = "myexpense.csv";
        a.click();
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={downloadExpenses}
        id="downloadexpense"
        className="btn btn-primary position-fixed bottom-0 end-0 m-5 rounded-circle btn-lg"
      >
        <i className="fas fa-download"></i>
      </button>

      <div className="container table-responsive mt-4 p-3">
        <div className="ps-2 pe-5 py-1 ms-3 me-5 my-1">
          <h3>DAILY REPORTS</h3>
          <form onSubmit={getDailyReport}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Select Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Show
            </button>
          </form>
        </div>
        <table className="table table-hover display">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {dailyExpenses.map((expense, index) => (
              <tr key={index}>
                <th>{expense.date}</th>
                <td>{expense.expenseCategory}</td>
                <td>{expense.expenseDescription}</td>
                <td>{expense.expenseAmount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{totalDailyAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="container table-responsive mt-4 p-3">
        <div className="px-2 py-1 ms-3 me-4 my-1">
          <h3>MONTHLY REPORTS</h3>
          <form onSubmit={getMonthlyReport}>
            <div className="mb-3">
              <label htmlFor="month" className="form-label">
                Select Month
              </label>
              <input
                type="month"
                className="form-control"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Show
            </button>
          </form>
        </div>
        <table className="table table-hover display">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {monthlyExpenses.map((expense, index) => (
              <tr key={index}>
                <th>{expense.date}</th>
                <td>{expense.expenseCategory}</td>
                <td>{expense.expenseDescription}</td>
                <td>{expense.expenseAmount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{totalMonthlyAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Reports;
