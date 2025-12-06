import React from 'react';

// Si usas tailwind.config.js y vite-env.d.ts,
// debes asegurarte de que los estilos CSS globales se apliquen.
// Aquí solo definiremos la estructura del componente.

const Registro: React.FC = () => {

    const handleCancel = () => {
        // En una aplicación real, usarías un router (como React Router)
        // para la navegación sin recargar. Aquí usamos la navegación directa.
        window.location.href = "login-admin.html";
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert('Lógica de creación de cuenta enviada.');
        // Aquí iría la lógica para enviar el formulario (fetch, axios, etc.)
    };

    return (
        <div className="registro-container">
            <h2 className="form-title">Crear Nueva Cuenta</h2>

            <form onSubmit={handleSubmit} className="registro-form">
                
                {/* 1. Datos Personales */}
                <fieldset className="form-section">
                    <legend>Datos Personales</legend>

                    <div className="input-group">
                        <label htmlFor="nombres">Nombres *</label>
                        <input type="text" id="nombres" name="nombres" required className="input-field" />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="apellidos">Apellidos *</label>
                        <input type="text" id="apellidos" name="apellidos" required className="input-field" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="dni">DNI *</label>
                        <input type="text" id="dni" name="dni" required className="input-field" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required className="input-field" />
                    </div>

                    <div className="input-group full-width">
                        <label htmlFor="telefono">Teléfono *</label>
                        <input type="tel" id="telefono" name="telefono" required className="input-field" />
                    </div>
                </fieldset>

                {/* 2. Credenciales de Acceso */}
                <fieldset className="form-section">
                    <legend>Credenciales de Acceso</legend>
                    
                    <div className="input-group full-width">
                        <label htmlFor="usuario">Usuario *</label>
                        <input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario para iniciar sesión" required className="input-field" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="contrasena">Contraseña *</label>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Mínimo 6 caracteres" required minLength={6} className="input-field" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmar-contrasena">Confirmar Contraseña *</label>
                        <input type="password" id="confirmar-contrasena" name="confirmar-contrasena" required minLength={6} className="input-field" />
                    </div>
                </fieldset>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">
                        Crear Cuenta
                    </button>
                    
                    <button type="button" onClick={handleCancel} className="btn-secondary">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Registro;