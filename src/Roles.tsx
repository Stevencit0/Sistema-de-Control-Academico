import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const Roles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* HEADER */}
      <header className="bg-[#275A49] text-white px-6 py-4 flex items-center gap-3 shadow-md">
        <img
          src="./escudo.png"
          alt="logo"
          className="w-10 h-10 object-contain rounded"
        />
        <h2 className="text-lg font-semibold">CRL. Juan Valer Sandoval</h2>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="py-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-10">
          Seleccione su rol para ingresar:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          
          {/* ADMINISTRATIVO */}
          <div
            onClick={() => navigate("/login-administrativo")}
            className="bg-white p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="bg-[#5A8E9F] p-5 rounded-xl inline-block mb-6">
              <Briefcase className="text-white w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">ADMINISTRATIVO</h4>
            <p className="text-gray-600 text-md mt-2">
              Acceso para Administrativo
            </p>
          </div>

          {/* DOCENTE */}
          <div
            onClick={() => navigate("/login-docente")}
            className="bg-white p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="bg-[#5A8E9F] p-5 rounded-xl inline-block mb-6">
              <BookOpen className="text-white w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">DOCENTE</h4>
            <p className="text-gray-600 text-md mt-2">
              Acceso para Docentes
            </p>
          </div>

          {/* ESTUDIANTE */}
          <div
            onClick={() => navigate("/login-estudiante")}
            className="bg-white p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="bg-[#5A8E9F] p-5 rounded-xl inline-block mb-6">
              <GraduationCap className="text-white w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">ESTUDIANTE</h4>
            <p className="text-gray-600 text-md mt-2">
              Acceso para Estudiantes
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Roles;

