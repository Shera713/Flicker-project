
let movies = [];

async function searchChange(event) {
  const searchTerm = event.target.value.trim();
  const searchNameEl = document.querySelector('.searchName');
  const movieContainer = document.querySelector('.movieSort');

  searchNameEl.textContent = searchTerm ? `"${searchTerm}"` : "";

  if (!searchTerm) {
    movieContainer.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=a32eca9f`);
    const data = await response.json();

    if (data.Response === "False") {
      movieContainer.innerHTML = `<p>No results found for "${searchTerm}".</p>`;
      movies = [];
      return;
    }

    movies = data.Search;

    renderMovies("NEW_TO_OLD");
  } catch (error) {
    console.error("Error fetching movies:", error);
    movieContainer.innerHTML = `<p>⚠️ Could not load movies. Please try again later.</p>`;
  }
}

function orderListBy(event) {
  const order = event.target.value;
  renderMovies(order);
}

function renderMovies(order) {
  const movieSortWrapper = document.querySelector('.movieSort');
  if (!movies || movies.length === 0) {
    movieSortWrapper.innerHTML = "<p>No movies to display.</p>";
    return;
  }

  
  let sortedMovies = [...movies];

  if (order === "OLD_TO_NEW") {
    sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  } else if (order === "NEW_TO_OLD") {
    sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }

  const limitedMovies = sortedMovies.slice(0, 6);

  const html = limitedMovies
    .map(movie => `
      <div class="movie-card">
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : './assets/placeholder.png'}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
      </div>
    `)
    .join("");

  movieSortWrapper.innerHTML = html;
}



 //MENU BUTTON

 function openMenu(){
document.body.classList += "menu--open"
}

function closeMenu(){
document.body.classList.remove('menu--open')
}


