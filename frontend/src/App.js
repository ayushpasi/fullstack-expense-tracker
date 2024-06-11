import Home from "./components/Home";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    //rendring the component
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Slider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
