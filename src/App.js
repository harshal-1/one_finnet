import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import BicyclesPage from "./components/Bicycles.jsx";
import Navbar from "./components/Navbar.jsx";
import Accessories from "./components/Accessories.jsx";

export default function App() {
  return (
    <div>
    <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/bicycles" element={<BicyclesPage />} ></Route>
            <Route path="/accessories" element={<Accessories />} ></Route>
          </Routes>
    </Router>
    </div>
  
  );
}
