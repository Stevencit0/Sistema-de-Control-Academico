import { useEffect, useState } from "react";

interface Curso {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  grado: string;
  horas: string;
  docente_id: string | null;
}

interface Docente {
  id: number;
  nombres: string;
  apellidos: string;
}

export default function CursosView() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [docentes, setDocentes] = useState<Docente[]>([]);

  // Campos del formulario
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [grado, setGrado] = useState("");
  const [horas, setHoras] = useState("");
  const [docenteID, setDocenteID] = useState("");

  const [editID, setEditID] = useState<number | null>(null);

  // ================================
  // Cargar cursos
  // ================================
  const cargarCursos = async () => {
    const res = await fetch("http://localhost:3001/cursos");
    const data = await res.json();
    setCursos(data);
  };

  // Cargar docentes
  const cargarDocentes = async () => {
    const res = await fetch("http://localhost:3001/docentes");
    const data = await res.json();
    setDocentes(data);
  };

  useEffect(() => {
    cargarCursos();
    cargarDocentes();
  }, []);

  // ================================
  // Guardar Curso
  // ================================
  const guardarCurso = async () => {
    if (!codigo || !nombre || !grado) {
      alert("Debe completar los campos obligatorios");
      return;
    }

    const datos = {
      codigo,
      nombre,
      descripcion,
      grado,
      horas,
      docente_id: docenteID || null,
    };

    const url = editID
      ? `http://localhost:3001/cursos/${editID}`
      : "http://localhost:3001/cursos";

    const metodo = editID ? "PUT" : "POST";

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await res.json();

    if (data.success) {
      alert(editID ? "Curso actualizado" : "Curso registrado");
      limpiarFormulario();
      cargarCursos();
    } else {
      alert("Error al guardar curso");
    }
  };

  // ================================
  // EDITAR CURSO
  // ================================
  const editar = (c: Curso) => {
    setEditID(c.id);
    setCodigo(c.codigo);
    setNombre(c.nombre);
    setDescripcion(c.descripcion);
    setGrado(c.grado);
    setHoras(c.horas);
    setDocenteID(c.docente_id || "");
  };

  // ================================
  // ELIMINAR CURSO
  // ================================
  const eliminar = async (id: number) => {
    if (!confirm("¿Eliminar este curso?")) return;

    const res = await fetch(`http://localhost:3001/cursos/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      alert("Curso eliminado");
      cargarCursos();
    } else {
      alert("Error al eliminar curso");
    }
  };

  // ================================
  // LIMPIAR FORMULARIO
  // ================================
  const limpiarFormulario = () => {
    setEditID(null);
    setCodigo("");
    setNombre("");
    setDescripcion("");
    setGrado("");
    setHoras("");
    setDocenteID("");
  };

  // ================================
  // INTERFAZ DE USUARIO
  // ================================
  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">📘 Gestión de Cursos</h2>

      {/* FORMULARIO */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 border">

        <h3 className="text-lg font-semibold mb-4">Registrar / Editar Curso</h3>

        <div className="grid grid-cols-2 gap-4">

          <input
            className="input"
            placeholder="Código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <input
            className="input"
            placeholder="Nombre del Curso"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            className="input"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <select className="input" value={grado} onChange={(e) => setGrado(e.target.value)}>
            <option value="">Seleccionar Grado</option>
            <option>1ro</option><option>2do</option><option>3ro</option>
            <option>4to</option><option>5to</option><option>6to</option>
          </select>

          <input
            className="input"
            placeholder="Horas académicas"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />

          {/* Seleccionar docente */}
          <select className="input" value={docenteID} onChange={(e) => setDocenteID(e.target.value)}>
            <option value="">Sin docente asignado</option>
            {docentes.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nombres} {d.apellidos}
              </option>
            ))}
          </select>

        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded" onClick={guardarCurso}>
            {editID ? "Actualizar" : "Guardar Curso"}
          </button>

          <button className="bg-gray-400 text-white px-6 py-2 rounded" onClick={limpiarFormulario}>
            Cancelar
          </button>
        </div>

      </div>

      {/* TABLA */}
      <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Código</th>
              <th>Curso</th>
              <th>Grado</th>
              <th>Horas</th>
              <th>Docente</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cursos.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{c.codigo}</td>
                <td>{c.nombre}</td>
                <td>{c.grado}</td>
                <td>{c.horas}</td>
                <td>
                  {c.docente_id
                    ? docentes.find((d) => d.id === Number(c.docente_id))?.nombres +
                      " " +
                      docentes.find((d) => d.id === Number(c.docente_id))?.apellidos
                    : "Sin asignar"}
                </td>

                <td className="flex gap-3 p-2">
                  <button className="text-blue-600 font-semibold" onClick={() => editar(c)}>Editar</button>
                  <button className="text-red-600 font-semibold" onClick={() => eliminar(c.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

