function goRoles() {
    window.location.href = "roles.html";
}

function goLogin(tipo) {
    if (tipo === "admin") window.location.href = "login-admin.html";
    if (tipo === "docente") alert("Login docente aún no creado");
    if (tipo === "estudiante") alert("Login estudiante aún no creado");
}
