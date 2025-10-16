//https://omdbapi.com/?s=fast&apikey=${a32eca9f}


async function main() {
    const movie = await fetch("https://omdbapi.com/?s=fast&apikey=${a32eca9f}")
    const movieData = await movie.json();
}
main();