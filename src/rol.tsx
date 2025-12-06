import React from 'react';
// Si usas React Router, podrías importar 'useNavigate' aquí

// Definición de la interfaz (o tipo) para los roles
type Role = 'admin' | 'docente' | 'estudiante';

// -----------------------------------------------------------------

// Componente individual para la tarjeta de rol
interface RoleCardProps {
  roleType: Role;
  title: string;
  description: string;
  iconPath: string; // Ruta de la imagen del ícono
  onClick: (role: Role) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ roleType, title, description, iconPath, onClick }) => {
  return (
    <div
      className="role-card" // Asegúrate de que esta clase esté definida en tu CSS
      onClick={() => onClick(roleType)}
      // Opcional: Para accesibilidad, puedes añadir onKeyDown
      tabIndex={0}
      role="button"
    >
      <img src={iconPath} alt={`Ícono de ${title}`} className="role-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// -----------------------------------------------------------------

// Componente principal de la página
const SelectRolePage: React.FC = () => {
  
  // Función que se llama al hacer clic en una tarjeta de rol
  const handleGoLogin = (role: Role) => {
    console.log(`Navegando al login para el rol: ${role}`);
    
    // Aquí iría tu lógica de navegación real, por ejemplo:
    // navigate(`/login/${role}`);
    
    // Ejemplo simple:
    alert(`Has seleccionado el rol: ${role}. Redirigiendo...`);
    // window.location.href = `/login?role=${role}`;
  };

  // Definición de los datos de los roles
  const roles = [
    {
      roleType: 'admin' as Role,
      title: 'ADMINISTRATIVO',
      description: 'Acceso para Administrativo',
      iconPath: './Icono administrativo.png', // Reemplaza con la ruta correcta
    },
    {
      roleType: 'docente' as Role,
      title: 'DOCENTE',
      description: 'Acceso para Docentes',
      iconPath: './Icono docente.png', // Reemplaza con la ruta correcta
    },
    {
      roleType: 'estudiante' as Role,
      title: 'ESTUDIANTE',
      description: 'Acceso para Estudiantes',
      iconPath: './Icono alumno.png', // Reemplaza con la ruta correcta
    },
  ];

  return (
    // Reemplaza el <body> con un <div> o <main>
    <div className="select-role-page-container"> 
      
      {/* HEADER */}
      <header className="header">
        {/* Asegúrate de que la ruta de la imagen sea accesible (ej: en la carpeta public) */}
        <img src="./escudo.png" alt="Logo Colegio" className="logo-mini" />
        <span>CRL. Juan Valer Sandoval</span>
      </header>
      
      {/* TÍTULO */}
      <h2 className="roles-title">Seleccione su rol para ingresar:</h2>

      {/* CONTENEDOR DE ROLES */}
      <div className="roles-container">
        {roles.map((role) => (
          <RoleCard
            key={role.roleType}
            roleType={role.roleType}
            title={role.title}
            description={role.description}
            iconPath={role.iconPath}
            onClick={handleGoLogin}
          />
        ))}
      </div>
      
      {/* NOTA: En React, no se suele incluir la etiqueta <script> al final de los componentes */}
    </div>
  );
};

export default SelectRolePage;