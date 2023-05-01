document.querySelector('.keluar').addEventListener('click', (e)=>{
  e.preventDefault();
  localStorage.removeItem('sudah_login');
  window.location.replace('index.html');
});