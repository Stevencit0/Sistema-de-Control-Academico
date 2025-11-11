document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (user === "admin450" && pass === "dba3/*890") {
    window.location.href = "admin.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});