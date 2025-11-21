
function showSection(id){
  document.querySelectorAll('.panel-section').forEach(s=> s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

function logout(){
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('role');
  location.href = 'index.html';
}
