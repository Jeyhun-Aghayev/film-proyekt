axios.get("https://api.tvmaze.com/shows/1")
.then(data=>console.log(data))

axios.get("https://api.tvmaze.com/shows")
.then(res=>console.log(res))

// axios.get("https://api.tvmaze.com/shows")
// .then(res=>{
//     for (let i = 0; i < res.data.length; i++) {
        
//         let img=document.createElement("img")
//         img.setAttribute("src",res.data[i].image.medium)
//         document.querySelector("body").appendChild(img)
//     }
// })

let row1 = document.querySelector(".container .row")
axios.get("https://api.tvmaze.com/shows")
.then(res=>{
    for (let i = 0; i < 10; i++) {
        
        row1.innerHTML+=`
        <div class="col-3">
        <a href="${res.data[i].url}" style="text-decoration: none;" target="_blank">
            <div class="card" >
              <div class = "title">
                <p class="titlep">${res.data[i].summary}</p>
              </div>
              <div class="another">
                <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
                </div> 
                <div class="card-body">
                <h5 class="card-title">${res.data[i].name}</h5>
                <p class="card-text">${res.data[i].genres}</p>
                </div>
            </div>
            </a>
        </div>`
    }
})


// searchin funksiyasi

let row2 = document.querySelector(".container .row");
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('btn');
let a = 0;
let b;
searchButton.addEventListener("click",function(){

    axios.get("https://api.tvmaze.com/shows")
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            a++;
            b=12%a
          row2.innerHTML += `
          <div class="col-3">
          <a href="${res.data[i].url}" style="text-decoration: none;" target="_blank">
              <div class="card" >
                <div class = "title">
                  <p class="titlep">${res.data[i].summary}</p>
                </div>
                <div class="another">
                  <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
                  </div> 
                  <div class="card-body">
                  <h5 class="card-title">${res.data[i].name}</h5>
                  <p class="card-text">${res.data[i].genres}</p>
                  </div>
              </div>
              </a>
          </div>`;
        }
        a=0
})

    function searchShows() {
      let searchTerm = searchInput.value.toLowerCase();
      let cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    searchButton.addEventListener('click', searchShows);
  });
