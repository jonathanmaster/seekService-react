import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import Directorio from "./components/directorio/Directorio";
import About from "./components/about/About";
import "./components/css/fondo-home.css"
import Contacto from "./components/Contact/Contacto";


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
