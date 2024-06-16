import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/premium/show-leader-board",
          {
            headers: { Authorization: token },
          }
        );
        setLeaderboardData(response.data.userLeaderboardDetails);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError("Failed to load leaderboard data.");
      }
    };
    fetchLeaderboardData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">LEADERBOARD 🏆</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Name</th>
              <th scope="col">Expenses</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.totalExpense}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
