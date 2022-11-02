import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/imagenes";
// import Dropdown from "../dropdown/Dropdown";
import "../css/fondo-home.css";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { logout} = useAuth();


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="h-20 bg-header">
      <ul className="flex flex-row justify-end gap-3 mr-4 py-2 items-center text-white">
        <Link
          to="/"
          className="mr-auto pl-3 flex items-center text-xl font-medium"
        >
          <img src={img.logo} alt="Logo" className="w-16" /> SeekService
        </Link>

        <Link to="/directorio" className="text-lg hover:text-teal-600">
          Directorio
        </Link>
        <Link to="/about" className="text-lg hover:text-teal-600">
          Sobre Nosotros
        </Link>
        <Link to="/contacto" className="text-lg hover:text-teal-600">
          Contáctame
        </Link>
        <Link to="/registro" className="hover:text-teal-600">
            Registra tu Servicio
          </Link>
        <div>
          <button
            className="bg-purple-700  hover:bg-teal-600 hover:text-white rounded  py-2 px-4 ml-2 flex items-center"
            onClick={handleLogout}
          >
              {/* {user.displayName || user.email} */}
              Jonthan Rodriguez
              <img src={img.flechaAbajo} alt="flecha-abajo" className="w-6"/>
          </button>
        </div>
      </ul>
    </div>
  );
}
