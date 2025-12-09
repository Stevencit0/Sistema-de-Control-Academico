import { useEffect, useState } from "react";

interface Docente {
  id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  direccion: string;
  especialidad: string;
  usuario: string;
  contrasena: string;
}

export default function DocentesView() {
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [filtro, setFiltro] = useState("");

  // Campos del formulario
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [editID, setEditID] = useState<number | null>(null);

  // ==========================================
  // CARGAR DOCENTES
  // ==========================================
  const cargarDocentes = async () => {
    const res = await fetch("http://localhost:3001/docentes");
    const data = await res.json();
    setDocentes(data);
  };

  useEffect(() => {
    cargarDocentes();
  }, []);

  // ==========================================
  // GUARDAR / ACTUALIZAR
  // ==========================================
  const guardarDocente = async () => {
    if (!nombres.trim() || !apellidos.trim() || !dni.trim()) {
      alert("Nombres, apellidos y DNI son obligatorios.");
      return;
    }

    const datos = {
      nombres,
      apellidos,
      dni,
      email,
      telefono,
      direccion,
      especialidad,
      usuario,
      contrasena,
    };

    const url = editID
      ? `http://localhost:3001/docentes/${editID}`
      : "http://localhost:3001/docentes";

    const metodo = editID ? "PUT" : "POST";

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await res.json();

    if (data.success) {
      alert(editID ? "Docente actualizado" : "Docente registrado");
      limpiarFormulario();
      cargarDocentes();
    } else {
      alert("Error al guardar docente");
    }
  };

  // ==========================================
  // EDITAR DOCENTE
  // ==========================================
  const editar = (d: Docente) => {
    setEditID(d.id);
    setNombres(d.nombres);
    setApellidos(d.apellidos);
    setDni(d.dni);
    setEmail(d.email);
    setTelefono(d.telefono);
    setDireccion(d.direccion);
    setEspecialidad(d.especialidad);
    setUsuario(d.usuario);
    setContrasena(d.contrasena);
  };

  // ==========================================
  // ELIMINAR DOCENTE
  // ==========================================
  const eliminar = async (id: number) => {
    if (!confirm("¿Eliminar este docente?")) return;

    const res = await fetch(`http://localhost:3001/docentes/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      alert("Docente eliminado");
      cargarDocentes();
    } else {
      alert("Error al eliminar docente");
    }
  };

  // ==========================================
  // LIMPIAR FORMULARIO
  // ==========================================
  const limpiarFormulario = () => {
    setEditID(null);
    setNombres("");
    setApellidos("");
    setDni("");
    setEmail("");
    setTelefono("");
    setDireccion("");
    setEspecialidad("");
    setUsuario("");
    setContrasena("");
  };

  // ==========================================
  // FILTRO DE BÚSQUEDA
  // ==========================================
  const docentesFiltrados = docentes.filter((d) => {
    const texto = (
      d.nombres +
      " " +
      d.apellidos +
      " " +
      d.dni +
      " " +
      d.usuario
    )
      .toLowerCase()
      .trim();

    return texto.includes(filtro.toLowerCase().trim());
  });

  // ==========================================
  // INTERFAZ
  // ==========================================
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gestión de Docentes</h2>

      {/* FORMULARIO */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 border">
        <h3 className="text-lg font-semibold mb-4">
          {editID ? "Editar Docente" : "Registrar Nuevo Docente"}
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <input className="input" placeholder="Nombres"
            value={nombres} onChange={(e) => setNombres(e.target.value)} />

          <input className="input" placeholder="Apellidos"
            value={apellidos} onChange={(e) => setApellidos(e.target.value)} />

          <input className="input" placeholder="DNI"
            value={dni} onChange={(e) => setDni(e.target.value)} />

          <input className="input" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />

          <input className="input" placeholder="Teléfono"
            value={telefono} onChange={(e) => setTelefono(e.target.value)} />

          <input className="input" placeholder="Dirección"
            value={direccion} onChange={(e) => setDireccion(e.target.value)} />

          <input className="input" placeholder="Especialidad"
            value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />

          <input className="input" placeholder="Usuario"
            value={usuario} onChange={(e) => setUsuario(e.target.value)} />

          <input className="input" type="password" placeholder="Contraseña"
            value={contrasena} onChange={(e) => setContrasena(e.target.value)} />

        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded"
            onClick={guardarDocente}>
            {editID ? "Actualizar" : "Guardar Docente"}
          </button>

          <button className="bg-gray-400 text-white px-6 py-2 rounded"
            onClick={limpiarFormulario}>
            Cancelar
          </button>
        </div>
      </div>

      {/* TABLA + BUSCADOR */}
      <div className="bg-white rounded-xl shadow-lg border overflow-hidden">

        <div className="p-4 border-b flex justify-between">
          <span className="text-sm text-gray-600">{docentes.length} docente(s)</span>

          <input
            className="input max-w-xs"
            placeholder="Buscar por nombre, DNI o usuario..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">DNI</th>
              <th className="p-2 text-left">Especialidad</th>
              <th className="p-2 text-left">Usuario</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {docentesFiltrados.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No hay docentes registrados
                </td>
              </tr>
            ) : (
              docentesFiltrados.map((d) => (
                <tr key={d.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{d.id}</td>
                  <td className="p-2">
                    {d.nombres} {d.apellidos}
                  </td>
                  <td className="p-2">{d.dni}</td>
                  <td className="p-2">{d.especialidad}</td>
                  <td className="p-2">{d.usuario}</td>

                  <td className="p-2">
                    <button className="text-blue-600 font-semibold mr-3"
                      onClick={() => editar(d)}>Editar</button>

                    <button className="text-red-600 font-semibold"
                      onClick={() => eliminar(d.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

