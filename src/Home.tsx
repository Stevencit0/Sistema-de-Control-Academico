import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goRoles = () => {
    navigate("/roles");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#275A49] px-4">
      
      {/* Contenedor blanco */}
      <div className="bg-[#F5F5F0] p-10 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-2xl">
        
        {/* Logo */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <img
            src="/src/escudo.png"
            alt="Escudo"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Títulos */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Bienvenidos al Sistema del Colegio
        </h1>

        <h2 className="text-lg text-gray-700 mb-8 text-center">
          CRL. Juan Valer Sandoval
        </h2>

        {/* Botón */}
        <button
          onClick={goRoles}
          className="bg-[#D4AF37] text-[#1A2E25] font-medium px-6 py-3 rounded-lg shadow hover:bg-[#C5A005] transition"
        >
          Ingresar al Sistema
        </button>
      </div>
    </div>
  );
};

export default Home;
