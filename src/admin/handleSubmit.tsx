import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Logo.png"; // ← IMPORTA TU IMAGEN AQUÍ

export default function LoginAdministrativo() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuario = (document.getElementById("usuario") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const res = await fetch("http://localhost:3001/login-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Ingreso exitoso");
      navigate("/admin/inicio");
    } else {
      alert(data.message || "Credenciales inválidas");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full">

        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full object-cover shadow"
          />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Administrativo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="usuario"
            type="text"
            placeholder="Usuario"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Ingresar
          </button>
        </form>

        <button
          onClick={() => navigate("/roles")}
          className="w-full mt-4 text-gray-600 hover:underline"
        >
          Volver
        </button>
      </div>
    </div>
  );
}


