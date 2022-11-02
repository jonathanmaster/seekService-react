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
import Electro from "./components/directorios/electro/Electro";
import Hogar from "./components/directorios/Hogar";
import Decoracion from "./components/directorios/Decoracion";
import Sastre from "./components/directorios/Sastre";
import Taller from "./components/directorios/Taller";
import Otros from "./components/directorios/Otros";
import Info1 from "./components/directorios/electro/Info1";
import Info2 from "./components/directorios/electro/Info2";
import Registro from "./components/RegistrarServicio/Registro";


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/electro" element={<Electro />} />
          <Route path="/hogar" element={<Hogar />} />
          <Route path="/decoracion" element={<Decoracion />} />
          <Route path="/sastre" element={<Sastre />} />
          <Route path="/taller" element={<Taller />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/info1Electro" element={<Info1 />} />
          <Route path="/info2Electro" element={<Info2 />} />
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
