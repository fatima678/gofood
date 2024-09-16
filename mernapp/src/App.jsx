import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
