const movieListEl = document.querySelector('.movie-list');
     const id = localStorage.getItem("id");

function onSearchChange(event){
    const id = event.target.value;
renderMovies(id)
}

async function renderMovies(id) {
    const movie = await fetch("https://omdbapi.com/?s=${`id`}&apikey=a32eca9f")
    const movieData = await movie.json();
    movieListEl.innerHTML = movieData.Search.map(movie => moviesHTML(movie)).join('');
}

renderMovies(id)

function showMovie(id){
    localStorage.setItem("id", id)
    window.location.href =`${window.location.origin}/index.html#movies` 
}


 function moviesHTML(movie){
   return `<div class="movie-card" onclick= "showMoviePosts(${movie.id})">
    <div class="movie-card__container">
<h3>${movie.Title}</h3>
<p><b>year:</b>${movie.Year}</p>
<p><b>imbdID:</b>${movie.Imdb.ID}</p>
<p><b>movie poster</b> <a href="${movie.Poster}" target="_blank">
${movie.Poster}
</a></p>
</div>
</div>`
 }




 //MENU BUTTON

 function openMenu(){
document.body.classList += "menu--open"
}

function closeMenu(){
document.body.classList.remove('menu--open')
}



//<h3>title:</h3>
 //                 <p><b>year:</b></p>
 //                 <p><b>imbdID:</b></p>
  //                <p><b>movie poster</b> <a href="#" target="_blank"></a></p>