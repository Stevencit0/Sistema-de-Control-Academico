import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Logo.png";

export default function LoginEstudiante() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuario = (document.getElementById("usuario") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const res = await fetch("http://localhost:3001/login-estudiante", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Bienvenido estudiante");
      navigate("/estudiante/inicio");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-sm w-full">

        <img src={logo} className="w-20 h-20 mx-auto mb-4" />

        <h2 className="text-center text-2xl font-bold mb-6">Estudiante</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input id="usuario" className="input" placeholder="Usuario" />
          <input id="password" type="password" className="input" placeholder="Contraseña" />
          <button className="w-full bg-blue-700 text-white py-2 rounded">Ingresar</button>
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
