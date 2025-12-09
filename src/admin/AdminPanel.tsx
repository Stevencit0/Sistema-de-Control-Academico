import React from 'react';
// Asumiendo que 'escudo.png' está accesible
import logoEscudo from './Icon.administrativo.png'; 

// Componente para una tarjeta de estadística
interface StatCardProps {
    title: string;
    iconClass: string;
    iconColorClass: string;
    value: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, iconClass, iconColorClass, value }) => (
    <div className="stat-card">
        <div className={`stat-icon-wrapper ${iconColorClass}`}>
            {/* Aquí DEBES usar iconClass, que contendría el nombre de la clase Font Awesome, por ejemplo */}
            <i className={iconClass}></i> 
            {/* Si no usas Font Awesome, puedes dejar el marcador de posición o quitar la prop. */}
            <span style={{ fontSize: '24px' }}>&#x2022;</span> 
        </div>
        <p>{title}</p>
        <span className="stat-number">{value}</span>
    </div>
);

// Componente del Panel Principal
const AdminPanel: React.FC = () => {

    const handleLogout = () => {
        // Cerrar sesión y volver a la selección de roles
        window.location.href = "roles.html";
    };

    return (
        <div className="dashboard-container">
            
            {/* Menú Lateral (Sidebar) */}
            <aside className="sidebar">
                <div className="logo-area">
                    <img src={logoEscudo} alt="Logo" className="logo-mini" />
                    <span>Administrativo</span>
                </div>
                
                <nav className="nav-menu">
                    <ul>
                        <li className="nav-item active"><a href="#">Inicio</a></li>
                        <li className="nav-item"><a href="#">Perfil</a></li>
                        <li className="nav-item"><a href="#">Opciones</a></li>
                        <li className="nav-item"><a href="#">Roles</a></li>
                        <li className="nav-item"><a href="#">Estudiantes</a></li>
                        <li className="nav-item"><a href="#">Docentes</a></li>
                        <li className="nav-item"><a href="#">Cursos</a></li>
                        <li className="nav-item"><a href="#">Matrículas</a></li>
                        <li className="nav-item"><a href="#">Reportes</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Contenido Principal */}
            <main className="main-content">
                <header className="top-header">
                    <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
                </header>

                <section className="welcome-section">
                    <h1>Bienvenido(a) — Administrativo</h1>
                    <p>Sistema de Gestión del Colegio CRL. Juan Valer Sandoval</p>
                </section>

                {/* Tarjetas de Estadísticas */}
                <section className="stats-grid">
                    <StatCard title="Total Estudiantes" iconClass="fas fa-user-graduate" iconColorClass="icon-blue" value={0} />
                    <StatCard title="Total Docentes" iconClass="fas fa-user-tie" iconColorClass="icon-green" value={0} />
                    <StatCard title="Total Cursos" iconClass="fas fa-folder-open" iconColorClass="icon-purple" value={0} />
                    <StatCard title="Total Matrículas" iconClass="fas fa-clipboard-list" iconColorClass="icon-orange" value={0} />
                </section>

                <section className="bottom-area">
                    {/* Resumen del Sistema */}
                    <div className="system-summary">
                        <h2>Resumen del Sistema</h2>
                        <p>Año Escolar: <span>2025</span></p>
                        <p>Trimestre Actual: <span>4to</span></p>
                        <p>Estado del Sistema: <span className="status-active">Activo</span></p>
                    </div>
                    
                    {/* Acciones Rápidas */}
                    <div className="quick-actions">
                        <h2>Acciones Rápidas</h2>
                        <ul>
                            <li>Registrar nuevo estudiante</li>
                            <li>Crear nueva matrícula</li>
                            <li>Asignar docente a curso</li>
                            <li>Generar reportes</li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AdminPanel;