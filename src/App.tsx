import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import DumpIdeas from "./pages/dumpIdeas";
import ShitIdeas from "./pages/shitIdeas";
import Admin from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="dump" element={<DumpIdeas />} />
        <Route path="shit" element={<ShitIdeas />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
