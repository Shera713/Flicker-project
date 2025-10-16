//https://omdbapi.com/?s=fast&apikey=${a32eca9f}

const movieListEl = document.querySelector('.movie-list');
     const id = localStorage.getItem("id");

async function onSearchChange(event){
    const id = event.target.value;
renderMovies(id)
}

async function renderMovies(id) {
    const movie = await fetch("https://omdbapi.com/?s=fast&apikey=${a32eca9f}")
    const movieData = await movie.json();
    movieListEl.innerHTML = moviesData.map(movie => moviesHTML(movie)).join('');
}

renderMovies(id)

function showMovie(id){
    localStorage.setItem("id", id)
    window.location.href =`${window.location.origin}/index.html#movies` 
}


 function moviesHTML(movie){
   return `<div class="movie-card onclick=showMoviePosts(${movie.id})">
    <div class="movie-card__container">
<h3>${movie.title}</h3>
<p><b>year:</b>${movie.year}</p>
<p><b>imbdID:</b>${movie.imbdID}</p>
<p><b>movie poster</b> <a href="https://${movie.poster}" target="_blank">
${movie.poster}
</a></p>
</div>
</div>`
 }
