import { useEffect, useState } from "react";

interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  direccion: string;
  grado: string;
  seccion: string;
  nombrePadre: string;
  telefonoPadre: string;
  usuario: string;
  contrasena: string;
}

export default function EstudiantesView() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  // Campos del formulario
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [grado, setGrado] = useState("");
  const [seccion, setSeccion] = useState("");
  const [nombrePadre, setNombrePadre] = useState("");
  const [telefonoPadre, setTelefonoPadre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [editID, setEditID] = useState<number | null>(null);
  const [filtro, setFiltro] = useState("");

  // ==========================================
  // CARGAR ESTUDIANTES
  // ==========================================
  const cargarEstudiantes = async () => {
    try {
      const res = await fetch("http://localhost:3001/estudiantes");
      const data = await res.json();
      setEstudiantes(data);
    } catch (err) {
      console.error(err);
      alert("Error al cargar estudiantes");
    }
  };

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  // ==========================================
  // GUARDAR / ACTUALIZAR ESTUDIANTE
  // ==========================================
  const guardarEstudiante = async () => {
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
      grado,
      seccion,
      nombrePadre,
      telefonoPadre,
      usuario,
      contrasena,
    };

    const url = editID
      ? `http://localhost:3001/estudiantes/${editID}`
      : "http://localhost:3001/estudiantes";

    const metodo = editID ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const data = await res.json();

      if (data.success) {
        alert(editID ? "Estudiante actualizado" : "Estudiante registrado");
        limpiarFormulario();
        cargarEstudiantes();
      } else {
        alert("Error al guardar estudiante");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
  };

  // ==========================================
  // EDITAR
  // ==========================================
  const editar = (e: Estudiante) => {
    setEditID(e.id);
    setNombres(e.nombres);
    setApellidos(e.apellidos);
    setDni(e.dni);
    setEmail(e.email ?? "");
    setTelefono(e.telefono ?? "");
    setDireccion(e.direccion ?? "");
    setGrado(e.grado ?? "");
    setSeccion(e.seccion ?? "");
    setNombrePadre(e.nombrePadre ?? "");
    setTelefonoPadre(e.telefonoPadre ?? "");
    setUsuario(e.usuario ?? "");
    setContrasena(e.contrasena ?? "");
  };

  // ==========================================
  // ELIMINAR
  // ==========================================
  const eliminar = async (id: number) => {
    if (!confirm("¿Eliminar este estudiante?")) return;

    try {
      const res = await fetch(`http://localhost:3001/estudiantes/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        alert("Estudiante eliminado");
        cargarEstudiantes();
      } else {
        alert("Error al eliminar");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
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
    setGrado("");
    setSeccion("");
    setNombrePadre("");
    setTelefonoPadre("");
    setUsuario("");
    setContrasena("");
  };

  // ==========================================
  // FILTRO DE BÚSQUEDA
  // ==========================================
  const estudiantesFiltrados = estudiantes.filter((e) => {
    const texto = (
      e.nombres +
      " " +
      e.apellidos +
      " " +
      e.dni +
      " " +
      e.usuario
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
      <h2 className="text-2xl font-bold mb-6">Gestión de Estudiantes</h2>

      {/* FORMULARIO */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 border">
        <h3 className="text-lg font-semibold mb-4">
          {editID ? "Editar Estudiante" : "Registrar Nuevo Estudiante"}
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <input
            className="input"
            placeholder="Nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
          <input
            className="input"
            placeholder="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />

          <input
            className="input"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            className="input"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />

          <select
            className="input"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
          >
          <option value="">Seleccionar grado</option>
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

          <select
            className="input"
            value={seccion}
            onChange={(e) => setSeccion(e.target.value)}
          >
            <option value="">Seleccionar sección</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <input
            className="input"
            placeholder="Nombre del Apoderado"
            value={nombrePadre}
            onChange={(e) => setNombrePadre(e.target.value)}
          />
          <input
            className="input"
            placeholder="Teléfono del Apoderado"
            value={telefonoPadre}
            onChange={(e) => setTelefonoPadre(e.target.value)}
          />

          <input
            className="input"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="mt-6 flex gap-4">
          <button
            className="bg-green-700 text-white px-6 py-2 rounded"
            onClick={guardarEstudiante}
          >
            {editID ? "Actualizar" : "Guardar Estudiante"}
          </button>

          <button
            className="bg-gray-400 text-white px-6 py-2 rounded"
            onClick={limpiarFormulario}
          >
            Cancelar
          </button>
        </div>
      </div>

      {/* BUSCADOR + TABLA */}
      <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between gap-4">
          <span className="text-sm text-gray-600">
            Total: {estudiantes.length} estudiante(s)
          </span>
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
              <th className="p-2 text-left">Grado/Sección</th>
              <th className="p-2 text-left">Usuario</th>
              <th className="p-2 text-left">Teléfono</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantesFiltrados.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-4 text-gray-500"
                >
                  No hay estudiantes registrados
                </td>
              </tr>
            ) : (
              estudiantesFiltrados.map((e) => (
                <tr key={e.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{e.id}</td>
                  <td className="p-2">
                    {e.nombres} {e.apellidos}
                  </td>
                  <td className="p-2">{e.dni}</td>
                  <td className="p-2">
                    {e.grado} {e.seccion && `- ${e.seccion}`}
                  </td>
                  <td className="p-2">{e.usuario}</td>
                  <td className="p-2">{e.telefono}</td>
                  <td className="p-2">
                    <button
                      className="text-blue-600 font-semibold mr-3"
                      onClick={() => editar(e)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-red-600 font-semibold"
                      onClick={() => eliminar(e.id)}
                    >
                      Eliminar
                    </button>
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

