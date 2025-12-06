import './index.postcss.css';
 // O donde tengas tus estilos CSS
// Si tienes la imagen en la carpeta 'src', impórtala así:
// import escudo from './assets/escudo.png'; 
// Si la imagen está en la carpeta 'public', usa la ruta directa como abajo.

function App() {

  // Función para manejar el click del botón
  const goRoles = () => {
    console.log("Navegando a Bienvenida...");
    // Aquí iría tu lógica de navegación, por ejemplo: navigate('/bienvenida')
    window.location.href = '/bienvenida'; // Ejemplo simple
  };

  return (
    // Usamos un div contenedor en lugar de body
    <div className="welcome-bg min-h-screen flex flex-col items-center justify-center">
      
      <div className="welcome-card text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="logo-box mb-4 flex justify-center">
          {/* Asegúrate de que escudo.png esté en la carpeta public o impórtalo */}
          <img src="/src/escudo.png" alt="Logo colegio" className="h-32 w-auto" />
        </div>

        <h1 className="title-main text-3xl font-bold text-gray-800 mb-2">
          Bienvenidos al Sistema del Colegio
        </h1>
        <h2 className="title-sub text-xl text-gray-600 mb-6">
          CRL. Juan Valer Sandoval
        </h2>

        <button 
          onClick={goRoles} 
          className="btn-enter bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 shadow-md"
        >
          Ingresar al Sistema
        </button>
      </div>

    </div>
  )
}

export default App;


