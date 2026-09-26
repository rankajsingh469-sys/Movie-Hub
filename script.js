API = "http://www.omdbapi.com/?apikey=adae67f0&s=avenger";

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = movieInput.value.trim();

    if (!query) {
        return
    }

    searchMovies(query)


})



async function searchMovies(movieName) {
    movieHub.innerHTML = `
<div
  class="w-10 h-10 border-4 border-t-amber-500 border-gray-300 rounded-full animate-spin"
></div>
`
    let response = await fetch(`http://www.omdbapi.com/?apikey=adae67f0&s=${movieName}`);
    let data = await response.json();
    if (data.Response === "True") {
        displayMovie(data.Search);
    } else {
            movieHub.innerHTML = `<p class="text-white">🔍${data.Error}</p>`

    }


}


function displayMovie(data) {
    movieHub.innerHTML = ""
    data.forEach((movie) => {
        const div = document.createElement("div");
        div.dataset.id = movie.imdbID;
       
        div.setAttribute("class", "movie-card");
        div.innerHTML = `<div class="transition-all duration-200 hover:scale-110 hover:rounded-xl border hover:border-red-600">
        <div class="border rounded-xl aspect-[2/3] w-full bg-slate-800 overflow-hidden  ">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src=${movie.Poster} alt="Image not available">
        </div>
        <div class="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-1.5 sm:gap-2">
            <p class="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-2 leading-snug group-hover:text-red-400 transition">${movie.Title}</p>
            <p class="text-[11px] sm:text-xs font-medium text-slate-400">${movie.Year}</p>
            </div>
        </div>`
        movieHub.append(div)
    })
}


movieHub.addEventListener('click',(e) =>{
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card");
    const imdb = movieCard.dataset.id;
    console.log(imdb);
    location.href = `movie-details.html?id=${imdb}`

})