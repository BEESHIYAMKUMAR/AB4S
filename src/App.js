import "./App.css";
import "./Home.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Login from "./Pages/Home/Login";
import AboutMe from "./Pages/Home/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          
          <Routes>
            {/* <Route path="http://localhost:3000" element={<AboutMe />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/" element={<AboutMe />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}   

export default App;
