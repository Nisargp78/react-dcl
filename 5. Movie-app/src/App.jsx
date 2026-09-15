import React from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
