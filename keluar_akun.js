document.querySelector('.keluar').addEventListener('click', (e)=>{
  e.preventDefault();
  localStorage.removeItem('sudah_login');
  localStorage.setItem('pesan', 'Anda berhasil keluar!');
  window.location.replace('index.html');
});