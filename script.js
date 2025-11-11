function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "admin") {
        window.location.href = "admin.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}