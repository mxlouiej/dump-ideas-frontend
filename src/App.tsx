import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import DumpIdeas from "./pages/dumpIdeas";
import ShitIdeas from "./pages/shitIdeas";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Header from "./components/header";
import AuthProvider from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inputWords" element={<DumpIdeas />} />
          <Route path="getIdeas" element={<ShitIdeas />} />
          <Route path="login" element={<Login />} />
          {/* protected path */}
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
