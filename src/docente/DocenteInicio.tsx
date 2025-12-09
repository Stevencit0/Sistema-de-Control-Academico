import React from "react";

export default function DocenteInicio() {
  // Datos de ejemplo (luego se pueden traer desde el backend)
  const resumen = {
    cursos: 3,
    estudiantes: 95,
    asistenciasHoy: 88,
    pendientesCalificar: 12,
  };

  const proximasClases = [
    { id: 1, curso: "Matemática 5to B", hora: "08:00 - 08:45", aula: "Aula 5B" },
    { id: 2, curso: "Comunicación 4to A", hora: "09:00 - 09:45", aula: "Aula 4A" },
    { id: 3, curso: "Personal Social 3ro B", hora: "10:00 - 10:45", aula: "Aula 3B" },
  ];

  const ultimasAsistencias = [
    { id: 1, curso: "Matemática 5to B", fecha: "2025-12-08", presentes: 24, ausentes: 2 },
    { id: 2, curso: "Comunicación 4to A", fecha: "2025-12-07", presentes: 25, ausentes: 1 },
    { id: 3, curso: "Personal Social 3ro B", fecha: "2025-12-07", presentes: 23, ausentes: 3 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          👨‍🏫 Panel del Docente
        </h1>
        <p className="text-gray-500 mt-1">
          Bienvenido, aquí puedes ver un resumen rápido de tu actividad académica.
        </p>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500">Mis cursos</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {resumen.cursos}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500">Estudiantes asignados</p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">
            {resumen.estudiantes}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500">Asistencias de hoy</p>
          <p className="text-3xl font-bold text-indigo-600 mt-2">
            {resumen.asistenciasHoy}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500">Pendientes por calificar</p>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            {resumen.pendientesCalificar}
          </p>
        </div>
      </div>

      {/* Dos paneles: Próximas clases / Últimas asistencias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Próximas clases */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            📚 Próximas clases
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Curso</th>
                <th className="py-2">Horario</th>
                <th className="py-2">Aula</th>
              </tr>
            </thead>
            <tbody>
              {proximasClases.map((c) => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="py-2">{c.curso}</td>
                  <td className="py-2 text-gray-600">{c.hora}</td>
                  <td className="py-2 text-gray-600">{c.aula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Últimas asistencias */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            ✔️ Últimos registros de asistencia
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Curso</th>
                <th className="py-2">Fecha</th>
                <th className="py-2">Presentes</th>
                <th className="py-2">Ausentes</th>
              </tr>
            </thead>
            <tbody>
              {ultimasAsistencias.map((a) => (
                <tr key={a.id} className="border-b last:border-0">
                  <td className="py-2">{a.curso}</td>
                  <td className="py-2 text-gray-600">{a.fecha}</td>
                  <td className="py-2 text-emerald-600 font-semibold">
                    {a.presentes}
                  </td>
                  <td className="py-2 text-red-500 font-semibold">
                    {a.ausentes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nota final */}
      <p className="text-xs text-gray-400 mt-4">
        * Estos datos son de ejemplo. Luego podemos conectarlos a tus tablas:
        <strong> asistencias</strong>, <strong>calificaciones</strong>,{" "}
        <strong>cursos</strong> y <strong>estudiantes</strong>.
      </p>
    </div>
  );
}
