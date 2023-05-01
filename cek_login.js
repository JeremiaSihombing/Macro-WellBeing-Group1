if (!localStorage.getItem('sudah_login')){
  localStorage.setItem('pesan', 'Silahkan masuk ke akun Anda terlebih dahulu. Jika belum punya akun, silahkan mendaftarkan akun terlebih dahulu')
  window.location.replace('login.html');
}