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
 <img src=${movie.Poster} alt="">
  <h2>${movie.Title}</h2>
  <h4>${movie.Year}</h4>
  <p>${movie.Short}</p>
`;
   }).join(""); 

}

