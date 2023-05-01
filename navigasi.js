if (localStorage.getItem('sudah_login')){
        document.querySelectorAll('.sudahlogin').forEach((e)=>{
          e.style.display = 'block';
        });
        document.querySelectorAll('.belumlogin').forEach((e)=>{
          e.style.display = 'none';
        });
        document.querySelector('.nama').textContent = localStorage.getItem('nama');
        document.querySelector('.selamat-datang').textContent = 'Haloo ' + localStorage.getItem('nama') + '!';
      }
      else {
        document.querySelectorAll('.sudahlogin').forEach((e)=>{
          e.style.display = 'none';
        });
        document.querySelectorAll('.belumlogin').forEach((e)=>{
          e.style.display = 'block';
        });
        
      };
     
      document.querySelector('.menu-profil').style.display = 'none';
      let tombol_profil = false;
      document.querySelector('.nama').addEventListener('click', (e)=>{
        e.preventDefault();
        tombol_profil = !tombol_profil;
        if (tombol_profil === true){
          document.querySelector('.menu-profil').style.display = 'block';
        }
        else {
          document.querySelector('.menu-profil').style.display = 'none';
        }
      });