import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/imagenes";
import Dropdown from "../dropdown/Dropdown";
import "../css/fondo-home.css"

export default function Header() {

  return (
    <div className="h-20 bg-header">
      <ul className="flex flex-row justify-end gap-3 mr-4 py-2 items-center text-white">
        <Link to="/" className="mr-auto pl-3 flex items-center text-xl font-medium">
          <img src={img.logo} alt="Logo" className="w-16" /> SeekService
        </Link>

        <Link to="/directorio" className="text-lg hover:text-teal-600">
          Directorio
        </Link>
        <Link to="/about" className="text-lg hover:text-teal-600">
          Sobre Nosotros
        </Link>
        <Link to="/contacto" className="text-lg hover:text-teal-600">
          Contáctatme
        </Link>
        {/*  */}
        <Dropdown/>
      </ul>
    </div>
  );
}
