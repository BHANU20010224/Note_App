import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/SignIn/Signin";
import Signup from "./Pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
