import React from "react";
import { HomePage } from "./Pages/Homepage/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
