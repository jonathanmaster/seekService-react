import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  //   <option>{user.displayName || user.email}</option>;

  return (
    <div>
      <nav>
        <menu>
          <div id="demo1">
            <Link to="/" className="bg-purple-700 hover:bg-teal-600">
              {user.displayName || user.email}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-1"
              >
                <path
                  stroke-linecap="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg> */}
            </Link>
            <menu>
              <div>
                <Link to="/" className="bg-purple-700 hover:bg-teal-600">
                  Registra tu Servicio
                </Link>
                <button
                  className="bg-purple-700  hover:bg-teal-600 hover:text-white rounded  py-2 px-4 "
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            </menu>
          </div>
        </menu>
      </nav>
    </div>
  );
}
