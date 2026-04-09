let data = JSON.parse(localStorage.getItem("favourites")) || [];
let Favgrid = document.querySelector(`.favmovieGrid`);

function renderMovies() {
  Favgrid.innerHTML = "";

  if (data.length > 0) {
    data.forEach((item) => {
      Favgrid.innerHTML += ` 
        <div class='favMovieGrid1'>
          <img src="${item.poster}" alt="" >
          <div><button class="delete" value='${item.title}'>❌</button></div>
          <div class='title'>${item.title}</div>
        </div>`;
    });
  } else {
    Favgrid.innerHTML = `<h2 style="color:white; text-align:center; width:100%;">No Favorites Yet. Add some movies!</h2>`;
  }
}

renderMovies();

Favgrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let targetName = e.target.value;
    console.log("Deleted:", targetName);

    data = data.filter((item) => item.title !== targetName);

    localStorage.setItem("favourites", JSON.stringify(data));

    renderMovies();
  }
});
