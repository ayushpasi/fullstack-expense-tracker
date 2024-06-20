import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import ManageExpense from "./components/ManageExpense/ManageExpense";
import Logout from "./components/Logout/Logout";
import BuyPremium from "./components/BuyPremium/BuyPremium";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Reports from "./components/Reports/Reports";
import Contact from "./components/Contact/Contact";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    //rendring the component
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Slider />
          <Routes>
            <Route
              path="/reset-password/:requestId"
              element={<ResetPassword />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/buy-premium" element={<BuyPremium />} />
            <Route path="/manage-expense" element={<ManageExpense />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
export default App;
