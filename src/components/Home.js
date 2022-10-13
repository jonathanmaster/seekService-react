import { useAuth } from "../context/AuthContext";
import Header from "../components/header/Header";
import img from "../assets/imagenes";
import "./css/fondo-home.css";
import { Link } from "react-router-dom";

export function Home() {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="w-full fondo h-screen">
      <Header />
      <div className="w-full text-white p-5 mt-28 mr-auto ml-auto  container flex justify-center items-center flex-col">
        <h1 className="text-7xl">Busca Tu Servicio</h1>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon text-7xl">
            <img src={img["logo-home"]} alt="logo" className="text-7xl" />
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <p className="parrafo text-lg">
          Es simple. Los clientes buscan, te encuentran, te contactan, vendes.
        </p>
        <p className="parrafo text-lg">Estas a solo un Click.</p>
        <Link
          to="/directorio"
          className="text-lg flex mt-4 items-center bg-purple-700  hover:bg-teal-600 hover:text-white rounded  py-2 px-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          Comienza
        </Link>
      </div>
      <div className="flex justify-end items-center mr-3 position flex-row">
        <p className="mr-auto pl-3 items-center text-white">
          Copyright © 2022 SeekService | Políticas de
          tratamiento de datos personales
        </p>
        <img src={img["posicion"]} alt="posicion" className="icon-posicion" />
        <p className="parrafo text-lg text-white">Prado Vegas, Soacha</p>
      </div>
    </div>
  );
}
