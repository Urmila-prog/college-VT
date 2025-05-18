import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("token");
    // Only redirect to signup if not already on /login or /signup
    const currentPath = window.location.pathname;
    if (!isLoggedIn && currentPath !== "/login" && currentPath !== "/signup") {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Header />
          <Slider />
          <ProductionHouse />
          <GenreMovieList />
        </div>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
