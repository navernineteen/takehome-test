import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Home from "./views/home";
import Add from "./views/add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
