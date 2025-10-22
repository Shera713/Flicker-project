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



  //popcorn animation:    
  //   <div class="popcorn-container">
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
  <div class="popcorn"></div>
</div>


// popcorn CSS:
/*POPCORN
*/

/* Basic setup */
.popcorn-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* allow clicks through it */
  overflow: hidden;
  z-index: -1; /* keep behind other content */
}

/* Popcorn kernel */
.popcorn {
  position: absolute;
  bottom: -50px;
  width: 15px;
  height: 15px;
  background: radial-gradient(circle, #fffbe6 40%, #fdd835 100%);
  border-radius: 50%;
  opacity: 0.8;
  animation: floatUp 5s linear infinite;
}

/* Random placement and animation delay */
.popcorn:nth-child(1) { left: 5%; animation-delay: 0s; animation-duration: 6s; }
.popcorn:nth-child(2) { left: 15%; animation-delay: 1s; animation-duration: 7s; }
.popcorn:nth-child(3) { left: 25%; animation-delay: 2s; animation-duration: 5s; }
.popcorn:nth-child(4) { left: 35%; animation-delay: 0.5s; animation-duration: 6.5s; }
.popcorn:nth-child(5) { left: 45%; animation-delay: 1.5s; animation-duration: 7.5s; }
.popcorn:nth-child(6) { left: 55%; animation-delay: 0.3s; animation-duration: 6.2s; }
.popcorn:nth-child(7) { left: 65%; animation-delay: 1.2s; animation-duration: 5.8s; }
.popcorn:nth-child(8) { left: 75%; animation-delay: 2.1s; animation-duration: 6.7s; }
.popcorn:nth-child(9) { left: 85%; animation-delay: 0.7s; animation-duration: 7s; }
.popcorn:nth-child(10) { left: 95%; animation-delay: 1.8s; animation-duration: 6.3s; }

/* Animation keyframes */
@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-50vh) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(0.8);
    opacity: 0;
  }
}
