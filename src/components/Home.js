import Header from "../components/header/Header";
import img from "../assets/imagenes";
import "./css/fondo-home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full fondo h-screen">
      <Header />
      <div className="w-full text-white p-5 mt-28 mr-auto ml-auto  container flex justify-center items-center flex-col">
        <h1 className="text-7xl">Busca Tu Servicio</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon text-7xl">
            <img src={img["logo-home"]} alt="logo" className="text-7xl" />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="parrafo text-lg">
          Es simple. Los clientes buscan, te encuentran, te contactan, vendes.
        </p>
        <p className="parrafo text-lg">Estas a solo un Click.</p>
        <Link
          to="/directorio"
          className="text-lg flex mt-4 items-center bg-purple-700  hover:bg-teal-600 hover:text-white rounded  py-2 px-4 "
        >
          Comienza
          <img src={img.flechaAbajo} alt="flecha-abajo" className="w-6" />
        </Link>
      </div>
      <div className="flex justify-end items-center mr-3  flex-row mt-28">
        <p className="mr-auto pl-3 items-center text-white">
          Copyright © 2022 SeekService | Políticas de tratamiento de datos
          personales
        </p>
        <img src={img["posicion"]} alt="posicion" className="icon-posicion" />
        <p className="parrafo text-lg text-white">Prado Vegas, Soacha</p>
      </div>
    </div>
  );
}
