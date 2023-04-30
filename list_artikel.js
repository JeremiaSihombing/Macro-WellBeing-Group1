 let articles = [
              {
              	judul: "Pentingnya diet bagi Kesehatan",
                  img: "images/article1.png",
                  isi: "Diet seimbang penting karena organ dan jaringan membutuhkan nutrisi yang tepat untuk bekerja secara efektif. Tubuh menggunakan kalori dari makanan untuk beraktivitas, seperti berjalan, berpikir, bernapas, dan fungsi penting lain."
               },
               {
              	judul: "Makanan untuk menaikkan Berat Badan",
                  img: "images/article2.png",
                  isi: "Menaikkan berat badan yang cepat tidak dapat dilakukan dengan cara mengkonsumsi makanan dalam porsi berlebihan. Kamu juga harus memperhatikan asupan makanan yang cepat menambah berat badan dan memiliki kandungan gizi di dalamnya."
               },
               {
              	judul: "Pentingnya Asupan Gizi Seimbang Di Masa Pandemi Corona",
                  img: "images/article3.png",
                  isi: "Dimasa pandemi global Covid-19 tengah melanda lebih dari 200 negara, termasuk Indonesia. Di tengah PSBB dan physical distancing, para ahli mengingatkan untuk menjaga kondisi gizi terutama kepada anak-anak. Berdasarkan data, anak-anak memang memiliki prevalensi minim untuk terinfeksi Covid-19."
               },               
               {
              	judul: "Pentingnya Asupan Gizi Seimbang Di Masa Pandemi Corona",
                  img: "images/article3.png",
                  isi: "Dimasa pandemi global Covid-19 tengah melanda lebih dari 200 negara, termasuk Indonesia. Di tengah PSBB dan physical distancing, para ahli mengingatkan untuk menjaga kondisi gizi terutama kepada anak-anak. Berdasarkan data, anak-anak memang memiliki prevalensi minim untuk terinfeksi Covid-19."
               },
               {
              	judul: "Pentingnya Asupan Gizi Seimbang Di Masa Pandemi Corona",
                  img: "images/article3.png",
                  isi: "Dimasa pandemi global Covid-19 tengah melanda lebih dari 200 negara, termasuk Indonesia. Di tengah PSBB dan physical distancing, para ahli mengingatkan untuk menjaga kondisi gizi terutama kepada anak-anak. Berdasarkan data, anak-anak memang memiliki prevalensi minim untuk terinfeksi Covid-19."
               },               
               {
              	judul: "Pentingnya Asupan Gizi Seimbang Di Masa Pandemi Corona",
                  img: "images/article3.png",
                  isi: "Dimasa pandemi global Covid-19 tengah melanda lebih dari 200 negara, termasuk Indonesia. Di tengah PSBB dan physical distancing, para ahli mengingatkan untuk menjaga kondisi gizi terutama kepada anak-anak. Berdasarkan data, anak-anak memang memiliki prevalensi minim untuk terinfeksi Covid-19."
               },
];
          
      	let listCardArticle = document.querySelector(".artikel-container");
          
          let startCardList = 0;
          let endCardList = 0;
          let showCardAmount = 3;
          
          function articleList(showNumber){
          
          if (articles.length - showNumber >= showCardAmount){
          	endCardList = showNumber + showCardAmount;
}
          else if (articles.length - showNumber > 0){
          	endCardList = articles.length;
}
          
          for (let i=showNumber; i<endCardList; i++){
          	
              let article = document.createElement("div");
              article.innerHTML = `
                   

<div class="d-flex flex-column flex-md-row justify-content-center mx-md-5 gap-2 gap-md-5 mb-5 mb-md-0"  >
    <div class="p-2">
      <img class="w-100 w-md-50" src="${articles[i].img}" alt="" data-aos="fade-up-right" data-aos-duration="1000"/>
    </div>
    <div class="p-2 w-100 w-md-50" data-aos="fade-up-left" data-aos-duration="1000">
      <p style="font-size: 32px; font-weight: 800; text-align: left; ">${articles[i].judul}</p>
      <p class="d-none d-md-block isi-artikel" style="font-size: 18px; font-weight: 100;">${articles[i].isi}</p>
      <span><a href="artikel.html">Baca Selengkapnya</a></span>
    </div>  
  </div>


`;
              listCardArticle.appendChild(article);
              
}
          startCardList += showCardAmount;
          if (startCardList === articles.length){
           document.querySelector('.artikel-lainnya').style.display = 'none';
         }
}

          window.onload(articleList(startCardList));
       
