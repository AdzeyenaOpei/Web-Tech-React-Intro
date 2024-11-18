// Dependencies
import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import "./tailwind.output.css";
import About from "./Component/About";



const App = () => {
  return (
    <div className="min-h-screen bg-green-600 p-2">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      
      

    <Footer/>
    </div>
  );
};

export default App;
