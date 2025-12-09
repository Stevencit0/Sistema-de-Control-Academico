// =========================
//      DOCENTE LAYOUT
// =========================

import { Outlet, Link, useNavigate } from "react-router-dom";
import "./docente.css"; // si deseas estilos aparte

export default function DocenteLayout() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("docente");
    navigate("/login-docente");
  };

  return (
    <div className="docente-layout">

      {/* =========================
              SIDEBAR DOCENTE
      ============================ */}
      <aside className="sidebar-docente">
        <div className="logo-section">
          <img
            src="/logo-colegio.png"
            alt="Logo"
            className="docente-logo"
          />
          <h3>Docente</h3>
          <span className="subtitulo">CRL. Juan Valer Sandoval</span>
        </div>

        <nav className="menu-docente">
          <Link to="/docente/inicio">Inicio</Link>
          <Link to="/docente/perfil">Perfil</Link>
          <Link to="/docente/mis-estudiantes">Mis Estudiantes</Link>
          <Link to="/docente/mis-cursos">Mis Cursos</Link>
          <Link to="/docente/calificaciones">Calificaciones</Link>
          <Link to="/docente/asistencia">Asistencia</Link>
        </nav>

        <button className="btn-cerrar" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </aside>

      {/* =========================
              CONTENIDO
      ============================ */}
      <main className="contenido-docente">
        <Outlet />
      </main>
    </div>
  );
}
