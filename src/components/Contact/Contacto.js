import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";


export default function Contacto() {
  return (
    <div>
      <Header/>
      <div class=" mx-auto max-w-6xl bg-slate-200 py-20 px-12 lg:px-24 shadow-xl mb-8 mt-8">
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
                <div>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="title"
                >
                  Asunto
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Sugerencia"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="application-link"
                >
                  Mensaje
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="location"
                >
                  Barrio
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                  >
                    <option>Prado Vegas</option>
                    <option>Danubio</option>
                    <option>Hogares Soacha</option>
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
                    <option>Usuario</option>
                    <option>Vendedor</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="-mx-3 md:flex mt-2">
              <div class="md:w-full px-3">
                <button class="md:w-full bg-purple-600 text-white hover:bg-teal-600 text-whitefont-bold py-2 px-4 border-b-4 rounded-full">
                  <Link to="/directorio"> 
                    Enviar
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
