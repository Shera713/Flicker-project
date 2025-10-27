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

//SEARCH BAR 

function filterYear(filter){
if (filter === 'OLD_TO_NEW'){
    moviesWrapper.sort((a,b) => a.Year - b.Year);
}
else if (filter === 'NEW_TO_OLD'){
    moviesWrapper.sort((a,b) => b.Year - a.Year );
}
 
}

filterYear();