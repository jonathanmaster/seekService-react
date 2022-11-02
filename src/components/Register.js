import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import img from "../assets/imagenes";



export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-40">
    <div className="w-full max-w-xs m-auto mt-20 bg-gray-800 p-3 rounded-md">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
          <h1 className="text-2xl text-white font-bold ">Registrate</h1>

        <div className="mb-4 mt-2">
          <label
            htmlFor="email"
            className="block text-white text-base font-bold mb-2"
          >
            Correo
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-base font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <button className="bg-teal-600 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-16 mt-4">
          Registrar
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3 text-white">
      ¿Ya tiene una cuenta?
        <Link to="/login" className="text-white hover:text-purple-600">
        Inicio de sesión
        </Link>
      </p>
    </div>
    <Link
          to="/"
          className="mt-16 mr-6 pl-3 flex items-center justify-end text-xl font-medium"
        >
          <img src={img.logo} alt="Logo" className="w-16" /> SeekService
        </Link>
    </div>
  );
}
