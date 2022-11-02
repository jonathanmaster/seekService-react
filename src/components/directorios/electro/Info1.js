import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import img from "../../../assets/imagenes";

export default function Info1() {
  return (
    <div>
      <Header />
      <div className="my-12 p-5">
        <h1 className="text-center text-5xl color-text font-medium px-64">
          Serumu Alquiler, mantenimiento y reparacion de lavadoras
        </h1>
        <div>
          <img src={img.samu} alt="samu" className="mt-7 mx-auto" />
          <h2 className="text-center text-2xl color-text font-medium mt-6">
            Dirección: 465 Transversal #4b, Soacha, Cundinamarca
          </h2>
          <h2 className="text-center text-2xl color-text font-medium">
            Teléfono: 311 8550883
          </h2>
          <h2 className="text-center text-2xl color-text font-medium">
            Opciones de servicio: Entrega a domicilio
          </h2>
          <button className="text-lg flex mt-4 items-center bg-purple-700  hover:bg-teal-600 hover:text-white rounded  py-2 px-4 mx-auto text-white">
            <a href="https://api.whatsapp.com/send?phone=573118550883&text=Hola%2C+quiero+conocer+sus+horarios+y+la+forma+en+que+trabaja">Contáctalo</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
