import { NavLink, Outlet, useNavigate } from "react-router-dom";
import fotoAdmin from "./Icon.administrativo.png"; // ← tu imagen

export default function AdminLayout() {
  const navigate = useNavigate();

  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition";
  const active =
    "bg-green-700 text-white";
  const inactive =
    "text-white hover:bg-green-700 hover:text-white";

  const handleLogout = () => {
    navigate("/roles");  // volver a pantalla de roles
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-green-900 text-white flex flex-col shadow-xl">

        {/* FOTO + INFO */}
        <div className="px-4 py-6 flex flex-col items-center border-b border-green-700">
          <img
            src={fotoAdmin}
            alt="Admin"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />

          <h2 className="mt-3 text-md font-semibold">Administrativo</h2>
          <p className="text-xs text-green-200">CRL. Juan Valer Sandoval</p>
        </div>

        {/* MENÚ */}
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">

          <NavLink
            to="/admin/inicio"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            🏠 <span>Inicio</span>
          </NavLink>

          <NavLink
            to="/admin/matriculas"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            📝 <span>Gestión de Matrículas</span>
          </NavLink>

          <NavLink
            to="/admin/estudiantes"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            🎓 <span>Estudiantes</span>
          </NavLink>

          <NavLink
            to="/admin/docentes"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            👨‍🏫 <span>Docentes</span>
          </NavLink>

          <NavLink
            to="/admin/cursos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            📚 <span>Cursos</span>
          </NavLink>

        </nav>

        {/* BOTÓN CERRAR SESIÓN */}
        <div className="px-4 py-4 border-t border-green-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold shadow"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
