export default function AdminOpciones() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Opciones del sistema</h2>

      <div className="bg-white rounded-xl shadow p-6 max-w-3xl">
        <h3 className="font-semibold mb-2">Configuraciones generales</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block mb-1 font-medium">
              Año escolar actual
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="2025"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Trimestre actual
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="4to"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Nombre del sistema
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="Sistema de Gestión del Colegio"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Estado del sistema
            </label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>Activo</option>
              <option>Mantenimiento</option>
            </select>
          </div>
        </div>

        <button className="mt-4 bg-green-700 text-white text-sm px-4 py-2 rounded">
          Guardar configuración
        </button>
      </div>
    </div>
  );
}
