export default function AdminPerfil() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mi Perfil</h2>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <p className="font-semibold text-lg">admin</p>
            <p className="text-sm text-gray-500">Administrativo</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">Nombre de usuario</p>
            <p className="text-gray-600">admin</p>
          </div>

          <div>
            <p className="font-semibold">Rol</p>
            <p className="text-gray-600">Administrativo</p>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Cambiar contraseña</h3>

        <div className="space-y-2">
          <input
            type="password"
            placeholder="Contraseña actual"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Nueva contraseña"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Confirmar nueva contraseña"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <button className="mt-2 bg-green-700 text-white text-sm px-4 py-2 rounded">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}
