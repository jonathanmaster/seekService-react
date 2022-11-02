import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import "./login.css";
import img from "../assets/imagenes";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm mx-auto mt-20 bg-gray-800 p-3 rounded-md">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 "
        >
          <h1 className="text-2xl text-white font-bold ">Iniciar Sesión</h1>

          <div className="mb-4 mt-2">
            <label
              htmlFor="email"
              className="block text-white text-base font-bold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tucorreo@gmail.com"
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
              name="password"
              id="password"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*************"
            />
          </div>

          <div className=" items-center justify-between">
            <button
              className=" bg-teal-600 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inicia-boton mt-4"
              type="submit"
            >
              Iniciar sesión
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-white hover:text-purple-600 ml-28 mt-5"
              href="#!"
              onClick={handleResetPassword}
            >
              ¿Ha olvidado su contraseña?
            </a>
          </div>
        </form>
        <button
          onClick={handleGoogleSignin}
          className=" bg-teal-600 hover:bg-purple-600 text-white flex justify-center shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        >
          <img src={img.google} alt="google" className="w-6 mr-1" />
          Inicio de sesión con Google
        </button>
        <p className="my-4 text-sm flex justify-between px-3 text-white">
          ¿No tiene una cuenta?
          <Link to="/register" className="text-white hover:text-purple-600">
            Crear Cuenta
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
