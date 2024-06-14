import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import ManageExpense from "./components/ManageExpense/ManageExpense";
import Logout from "./components/Logout/Logout";
import { AuthProvider } from "./contexts/AuthContext";
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
