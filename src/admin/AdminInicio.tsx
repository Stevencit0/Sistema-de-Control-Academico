import React from "react";

export default function InicioAdminView() {
  return (
    <div className="p-6">

      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-3xl font-bold mb-2">Bienvenido(a) — Administrativo</h1>
      <p className="text-gray-600 mb-8">
        Sistema de Gestión del Colegio CRL. Juan Valer Sandoval
      </p>

      {/* TARJETAS DE RESUMEN */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-xl p-6 border text-center">
          <h3 className="text-gray-500 text-sm">Total Estudiantes</h3>
          <p className="text-3xl font-bold text-blue-700">—</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border text-center">
          <h3 className="text-gray-500 text-sm">Total Docentes</h3>
          <p className="text-3xl font-bold text-green-700">—</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border text-center">
          <h3 className="text-gray-500 text-sm">Total Cursos</h3>
          <p className="text-3xl font-bold text-purple-700">—</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border text-center">
          <h3 className="text-gray-500 text-sm">Total Matrículas</h3>
          <p className="text-3xl font-bold text-orange-700">—</p>
        </div>

      </div>

      {/* ACCIONES RÁPIDAS */}
      <div className="bg-green-900 text-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-semibold mb-4">Acciones rápidas</h2>

        <ul className="space-y-3">
          <li>• Registrar nuevo estudiante</li>
          <li>• Crear nueva matrícula</li>
          <li>• Agregar docente o curso</li>
          <li>• Actualizar información del sistema</li>
        </ul>
      </div>

    </div>
  );
}