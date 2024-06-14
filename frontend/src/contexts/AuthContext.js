import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // or use import { jwtDecode } from "jwt-decode"; if necessary

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to decode token and extract user details
  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token); // Using jwtDecode to decode the token
      return decoded;
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userDetails = decodeToken(token);
      if (userDetails) {
        setUser(userDetails);
      }
    }
  }, []);

  const login = (token) => {
    const userDetails = decodeToken(token);
    if (userDetails) {
      localStorage.setItem("token", token);
      setUser(userDetails);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
