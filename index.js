const moviesWrapper = document.querySelector('.movie-card__container')
const searchName =document.querySelector ('.searchName')

function searchChange(event){
    renderMovies(event.target.value)
    searchName.innerHTML  = event.target.value
}

async function renderMovies(searchTerm) {
    const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=a32eca9f`);
    const data = await response.json()
   const moviesArr = data.Search
   moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
return`
 <div class="movie-card">
 <img src=${movie.Poster} alt="">
  <h2>${movie.Title}</h2>
  <h4>${movie.Year}</h4>
  </div>
`;
   }).join(""); 

}

//SORT BAR 

let movies = []; 

async function fetchMovies(searchTerm) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=a32eca9f`);
    const data = await response.json();

    movies = data.Search || [];

    renderMovieSort("NEW_TO_OLD");
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function renderMovieSort(order) {
  const movieSortWrapper = document.querySelector('.movieSort');
  let sortedMovies = [movies];

  if (order === "OLD_TO_NEW") {
    sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  } else if (order === "NEW_TO_OLD") {
    sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }

  const html = sortedMovies
    .map(movie => `
      <div class="movie-card">
        <img src="${movie.Poster}" alt="">
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
      </div>
    `)
    .join("");

  movieSortWrapper.innerHTML = html;
}

function orderListBy(event) {
  renderMovieSort(event.target.value);
}


fetchMovies(searchTerm); 

