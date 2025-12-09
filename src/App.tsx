import { Routes, Route } from "react-router-dom";

/* =======================
        RUTAS PÚBLICAS
========================== */
import Home from "./Home";
import Bienvenida from "./Bienvenida";
import Roles from "./Roles";

/* ===== Logins ===== */
import LoginAdministrativo from "./admin/handleSubmit";
import LoginDocente from "./docente/LoginDocente";
import LoginEstudiante from "./estudiante/LoginEstudiante";

/* =======================
        ADMINISTRATIVO
========================== */
import AdminLayout from "./admin/AdminLayout";
import InicioAdminView from "./admin/AdminInicio";
import AdminPerfil from "./admin/AdminPerfil";
import AdminOpciones from "./admin/AdminOpciones";
import MatriculasView from "./admin/MatriculasView";
import EstudiantesView from "./admin/EstudiantesView";
import DocentesView from "./admin/DocentesView";
import CursosView from "./admin/CursosView";

/* ======== DOCENTE ======== */
import DocenteLayout from "./docente/DocenteLayout";
import DocenteInicio from "./docente/DocenteInicio";
// import DocenteCursos from "./docente/DocenteCursos";
// Aquí luego agregaremos:
// import DocenteCursos from "./docente/DocenteCursos";
// import DocenteAsistencias from "./docente/DocenteAsistencias";
// import DocenteCalificaciones from "./docente/DocenteCalificaciones";

export default function App() {
  return (
    <Routes>

      {/* =======================
              PÚBLICO
      ========================== */}
      <Route path="/" element={<Home />} />
      <Route path="/bienvenida" element={<Bienvenida />} />
      <Route path="/roles" element={<Roles />} />

      {/* Logins */}
      <Route path="/login-administrativo" element={<LoginAdministrativo />} />
      <Route path="/login-docente" element={<LoginDocente />} />
      <Route path="/login-estudiante" element={<LoginEstudiante />} />

      {/* =======================
          ÁREA ADMINISTRATIVA
      ========================== */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Página por defecto para /admin */}
        <Route index element={<InicioAdminView />} />

        {/* Rutas del menú */}
        <Route path="inicio" element={<InicioAdminView />} />
        <Route path="perfil" element={<AdminPerfil />} />
        <Route path="opciones" element={<AdminOpciones />} />
        <Route path="matriculas" element={<MatriculasView />} />
        <Route path="estudiantes" element={<EstudiantesView />} />
        <Route path="docentes" element={<DocentesView />} />
        <Route path="cursos" element={<CursosView />} />

      </Route>

      {/* =======================
              ÁREA DOCENTE
      ========================== */}
      <Route path="/docente" element={<DocenteLayout />}>

        {/* Página por defecto para /docente */}
        <Route index element={<DocenteInicio />} />

        {/* Inicio */}
        <Route path="inicio" element={<DocenteInicio />} />

        {/* Luego agregaremos más: */}
        {/*
          <Route path="cursos" element={<DocenteCursos />} />
          <Route path="asistencias" element={<DocenteAsistencias />} />
          <Route path="calificaciones" element={<DocenteCalificaciones />} />
        */}
      </Route>

    </Routes>
  );
}

