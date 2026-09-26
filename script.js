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
    let response = await fetch(`http://www.omdbapi.com/?apikey=adae67f0&s=${encodeURIComponent(movieName)}`);
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


let data = [
    {
        "Title": "Kill Bill: Vol. 1",
        "Year": "2003",
        "imdbID": "tt0266697",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Kill Bill: Vol. 2",
        "Year": "2004",
        "imdbID": "tt0378194",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2FiNzhiZTctNzU1Mi00NDkwLWExNDMtZTg0MjYyNzhkNWNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "To Kill a Mockingbird",
        "Year": "1962",
        "imdbID": "tt0056592",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A Time to Kill",
        "Year": "1996",
        "imdbID": "tt0117913",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmNiYzY1N2ItZDZiNC00ZGMyLWJlZjktZDE1MDI3NDBlYjE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Sin City: A Dame to Kill For",
        "Year": "2014",
        "imdbID": "tt0458481",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODYwNjgxMF5BMl5BanBnXkFtZTgwMTcwNzAyMjE@._V1_SX300.jpg"
    },
    {
        "Title": "Licence to Kill",
        "Year": "1989",
        "imdbID": "tt0097742",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjY3OWJkMjMtYTgwYS00MjJjLWE4M2ItOWVhOWMxNGM1NDk3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A View to a Kill",
        "Year": "1985",
        "imdbID": "tt0090264",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjc3ZTJkZjUtM2E4Mi00YzA1LWJkZTAtM2U0OWUyYTE4YTFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "3 Days to Kill",
        "Year": "2014",
        "imdbID": "tt2172934",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzM0MjE0Nzg1N15BMl5BanBnXkFtZTgwODA4ODE4MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Righteous Kill",
        "Year": "2008",
        "imdbID": "tt1034331",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwMjg3MjY3OV5BMl5BanBnXkFtZTcwNTc4MDU3MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Generation Kill",
        "Year": "2008",
        "imdbID": "tt0995832",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2NjAxOTQzNl5BMl5BanBnXkFtZTcwMjk4NzU3MQ@@._V1_SX300.jpg"
    }
];


displayMovie(data)