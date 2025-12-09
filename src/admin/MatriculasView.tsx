import React, { useEffect, useState } from "react";

export default function MatriculasView() {
  const [codigoMatricula, setCodigoMatricula] = useState("");
  const [estudianteID, setEstudianteID] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dniEstudiante, setDniEstudiante] = useState("");
  const [grado, setGrado] = useState("");
  const [seccion, setSeccion] = useState("");
  const [fechaMatricula, setFechaMatricula] = useState("");
  const [anioEscolar, setAnioEscolar] = useState("2025");
  const [estado, setEstado] = useState("Activa");
  const [apoderado, setApoderado] = useState("");
  const [telefonoApoderado, setTelefonoApoderado] = useState("");

  const [matriculas, setMatriculas] = useState([]);

  // ======================================================
  //   CARGAR CÓDIGO DE MATRÍCULA (MAT-000X)
  // ======================================================
  useEffect(() => {
    fetch("http://localhost:3001/matriculas/codigo/nuevo")
      .then((res) => res.json())
      .then((data) => setCodigoMatricula(data.codigoMatricula))
      .catch((err) => console.log(err));
  }, []);

  // ======================================================
  //   CARGAR LISTA DE MATRÍCULAS
  // ======================================================
  const cargarMatriculas = () => {
    fetch("http://localhost:3001/matriculas")
      .then((res) => res.json())
      .then((data) => setMatriculas(data));
  };

  useEffect(() => {
    cargarMatriculas();
  }, []);

  // ======================================================
  //   BUSCAR ESTUDIANTE POR ID
  // ======================================================
  const buscarEstudiante = async (id: string) => {
    if (!id.trim()) return;

    try {
      const res = await fetch(`http://localhost:3001/estudiantes/${id}`);
      const data = await res.json();

      if (data.success) {
        setNombres(data.nombres);
        setApellidos(data.apellidos);
        setDniEstudiante(data.dni);
      } else {
        // Si no existe → limpiar campos
        setNombres("");
        setApellidos("");
        setDniEstudiante("");
      }
    } catch (error) {
      console.log("Error consultando estudiante:", error);
    }
  };

  // ======================================================
  //   GUARDAR MATRÍCULA
  // ======================================================
  const guardarMatricula = async () => {
    if (!estudianteID || !nombres || !dniEstudiante) {
      alert("Completa los datos del estudiante");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/matriculas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          codigoMatricula,
          estudiante_id: estudianteID,
          dniEstudiante,
          grado,
          seccion,
          fechaMatricula,
          anioEscolar,
          estado,
          apoderado,
          telefonoApoderado,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Error al guardar matrícula");
        return;
      }

      alert("Matrícula registrada correctamente");
      cargarMatriculas();
    } catch (error) {
      alert("Error al conectar con el servidor");
      console.log(error);
    }
  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-4">Crear Nueva Matrícula</h2>

      {/* FORMULARIO */}
      <div className="grid grid-cols-2 gap-4">

        {/* Código */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          value={codigoMatricula}
          readOnly
        />

        {/* ID Estudiante */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          placeholder="ID del Estudiante"
          value={estudianteID}
          onChange={(e) => {
            setEstudianteID(e.target.value);
            buscarEstudiante(e.target.value);
          }}
        />

        {/* Nombre */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          placeholder="Nombre del Estudiante"
          value={nombres}
          readOnly
        />

        {/* DNI */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          placeholder="DNI del Estudiante"
          value={dniEstudiante}
          readOnly
        />

        {/* Grado */}
        <select
          className="border border-green-900 px-3 py-2 rounded-md"
          value={grado}
          onChange={(e) => setGrado(e.target.value)}
        >
          <option value="">Seleccionar Grado</option>
          <option value="1ro">1ro Primaria</option>
          <option value="2do">2do Primaria</option>
          <option value="3ro">3ro Primaria</option>
          <option value="4to">4to Primaria</option>
          <option value="5to">5to Primaria</option>
          <option value="6to">6to Primaria</option>
          <option value="1ro">1ro Secundaria</option>
          <option value="2do">2do Secundaria</option>
          <option value="3ro">3ro Secundaria</option>
          <option value="4to">4to Secundaria</option>
          <option value="5to">5to Secundaria</option>
        </select>

        {/* Sección */}
        <select
          className="border border-green-900 px-3 py-2 rounded-md"
          value={seccion}
          onChange={(e) => setSeccion(e.target.value)}
        >
          <option value="">Seleccionar Sección</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        {/* Fecha */}
        <input
          type="date"
          className="border border-green-900 px-3 py-2 rounded-md"
          value={fechaMatricula}
          onChange={(e) => setFechaMatricula(e.target.value)}
        />

        {/* Año Escolar */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          value={anioEscolar}
          onChange={(e) => setAnioEscolar(e.target.value)}
        />

        {/* Estado */}
        <select
          className="border border-green-900 px-3 py-2 rounded-md"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="Activa">Activa</option>
          <option value="Retirada">Retirada</option>
        </select>

        {/* Apoderado */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          placeholder="Nombre del Apoderado"
          value={apoderado}
          onChange={(e) => setApoderado(e.target.value)}
        />

        {/* Teléfono Apoderado */}
        <input
          className="border border-green-900 px-3 py-2 rounded-md"
          placeholder="Teléfono del Apoderado"
          value={telefonoApoderado}
          onChange={(e) => setTelefonoApoderado(e.target.value)}
        />
      </div>

      {/* BOTONES */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={guardarMatricula}
          className="bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Guardar Matrícula
        </button>

        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Cancelar
        </button>
      </div>

      {/* LISTADO */}
      <h3 className="text-lg font-bold mt-8">Listado de Matrículas</h3>

      <table className="w-full mt-3 border text-sm">
        <thead className="bg-green-900 text-white">
          <tr>
            <th className="p-2">Código</th>
            <th className="p-2">Estudiante</th>
            <th className="p-2">DNI</th>
            <th className="p-2">Grado/Sección</th>
            <th className="p-2">Año</th>
          </tr>
        </thead>

        <tbody>
          {matriculas.map((m: any) => (
            <tr key={m.id} className="border">
              <td className="p-2">{m.codigoMatricula}</td>
              <td className="p-2">{m.estudiante_id}</td>
              <td className="p-2">{m.dniEstudiante}</td>
              <td className="p-2">{m.grado} / {m.seccion}</td>
              <td className="p-2">{m.anioEscolar}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

