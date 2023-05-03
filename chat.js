let listChat = [];
if (localStorage.getItem('chat')){
  let dataChat = localStorage.getItem('chat');
  listChat = JSON.parse(dataChat);
}
let klik_chat = false;
const nama = localStorage.getItem('nama');
  const chats = document.querySelector('.chat-container');
  const container_dokter = document.querySelectorAll('.container-dokter');
  chats.style.display = 'none';
  function klik(){
    if (klik_chat === false){
      chats.style.display = 'none';
    }
    else {
      chats.style.display = 'flex';
    }
  }
  container_dokter.forEach((ex)=>{
    ex.querySelector('.icon-chat').addEventListener('click', (e)=>{
      e.preventDefault();
      klik_chat = true;
      klik();
      document.querySelector('.h2-chat').innerHTML = ex.querySelector('.nama-dokter').textContent;
      if (dataChat != null){
        listChat.forEach((e)=>{
        const chatt = document.createElement('div');
        chatt.innerHTML = `
        <div class="pesan">
          <h3>${nama}</h3>
          ${e}
        </div>
        `;
        document.querySelector('.isi-chat').insertAdjacentElement('afterbegin', chatt);
        });
        dataChat = null;
      }
    });
  });
  document.querySelector('.tutup-chat').addEventListener('click', ()=>{
    klik_chat = false;
    klik();
  });
  
  const chat = document.querySelector('.ketik-chat');
  chat.addEventListener('submit', (e)=>{
  e.preventDefault();
  let pesan = chat.elements.pesan.value;
  chat.reset();
  if (pesan != null){
    const container = document.createElement('div');
    container.innerHTML = `
    <div class="pesan">
      <h3>${nama}</h3>
      ${pesan}
    </div>
    `;
    document.querySelector('.isi-chat').insertAdjacentElement('afterbegin', container);
    listChat.push(pesan);
    let semuaChat = JSON.stringify(listChat);
    localStorage.setItem('chat', semuaChat);
    pesan = null;
    }
    else {
      
    }
});