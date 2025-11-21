
// Simple client-side "authentication" for demo purposes only.
// Predefined demo users for each role. In production, use a secure backend.
const demoUsers = {
  admin: [{u:'admin', p:'admin123'}],
  docente: [{u:'docente', p:'docente123'}],
  estudiante: [{u:'est', p:'est123'}]
};

function authenticate(role){
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const msgEl = document.getElementById('msg');
  msgEl.textContent = '';
  if(!user || !pass){ msgEl.textContent = 'Ingresa usuario y contraseña'; return; }
  const list = demoUsers[role] || [];
  const ok = list.some(x=> x.u === user && x.p === pass);
  if(ok){
    // set simple session and redirect
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('role', role);
    if(role === 'admin') location.href = 'panel_admin.html';
    if(role === 'docente') location.href = 'panel_docente.html';
    if(role === 'estudiante') location.href = 'panel_estudiante.html';
  } else {
    msgEl.textContent = 'Credenciales inválidas (demo)';
  }
}

// Allow Enter key
document.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter'){
    const btn = document.getElementById('loginBtn');
    if(btn) btn.click();
  }
});
