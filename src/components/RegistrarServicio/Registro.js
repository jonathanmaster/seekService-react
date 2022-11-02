import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Registro() {
  return (
    <div>
      <Header />
      <div class=" mx-auto max-w-6xl  py-10 px-12 lg:px-24 shadow-xl mb-5 mt-5">
        <h1 className="text-center text-4xl font-bold mb-4">Registra tu Servicio</h1>
        <form>
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="company"
                >
                  Nombre Completo
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Jonathan Rodriguez"
                />
                <div></div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="title"
                >
                  Nombre del Negocio
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Drogueria luna"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="application-link"
                >
                  Descripcion
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="application-link"
                >
                  Añadir imagen: 
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="file"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="location"
                >
                  Categoria
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                  >
                    <option>Electrodomesticos</option>
                    <option>Hogar</option>
                    <option>Decoraciones y Arreglos</option>
                    <option>Sastre y Calzado</option>
                    <option>Taller Mecanico</option>
                    <option>Otros</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="job-type"
                >
                  Rol
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type"
                  >
                    <option>Cliente</option>
                    <option>Vendedor</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="-mx-3 md:flex mt-2">
              <div class="md:w-full px-3">
                <button class="md:w-full bg-purple-600 text-white hover:bg-teal-600 text-whitefont-bold py-2 px-4 border-b-4 rounded-full">
                  <Link to="/directorio">Enviar</Link>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
