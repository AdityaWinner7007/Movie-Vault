const apiKey = `59042e8b`;
const url = `https://www.omdbapi.com/?apikey=59042e8b&s=avenger`;
let search = document.querySelector(`.search`);
let searchButton = document.querySelector(`.search-btn`);
export let data = JSON.parse(localStorage.getItem('favourites')) || [];


let grid = document.querySelector(`.container`);

grid.innerHTML = `<div class = "SearchMovie"> SEARCH YOUR MOVIES</div>`;

searchButton.addEventListener(`click`, async () => {
  grid.innerHTML = ``;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=59042e8b&s=${search.value}`,
  );

  let result = await response.json();
  console.log(result);
  if (result.Response === `True`) {
    let moviesArray = result.Search;
    moviesArray.forEach((item) => {
      grid.innerHTML += ` <div class="moviesGrid1">
                    <img src="${item.Poster}" alt="" >
                   <div class="FaviconContainer"><button class='favButton' value= '${item.Title}'
                    data-poster = '${item.Poster}'>  💖</button></div>
                      <h2>${item.Title}</h2>
                      <p> ${item.Year}</p>
                </div>`;
                let favButton = document.querySelector(`.favButton`);
    
    
    });
  } else {
    grid.innerHTML = `<h2 class= "errorr">MOVIE NOT FOUND</h2>`;
  }
});



grid.addEventListener('click', (e)=>{
 if( e.target.classList.contains(`favButton`)){
  let movieFavourite = {
    
    title: e.target.value,
    poster: e.target.getAttribute('data-poster'),
  }
 data.push(movieFavourite);
 localStorage.setItem('favourites', JSON.stringify(data));
 }
 console.log(data);
})

search.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchButton.click();
  }
});

