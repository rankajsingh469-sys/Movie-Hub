
const params = new URLSearchParams(location.search);
const imdb = params.get("id");

if(imdb){
    searchMovie(imdb.trim())
}



async function searchMovie(imdb) {


    let response = await fetch(`http://www.omdbapi.com/?apikey=adae67f0&i=${imdb}&plot=full`);
    let data = await response.json();
    console.log(data);
    if (imdb) {
        displayMovie(data);
    } else {
            movieDetail.innerHTML = `<p>${data.Error}</p>`

    }



}

const movieDetail = document.querySelector(".movie-detail");


function displayMovie(data){
    movieDetail.innerHTML = `<img src=${data.Poster} alt="">
        </div>

        <div>
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMDb: ${data.imdbRating} / 10</p>
            </section>

            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                 <p>Actors</p>
                    <p>${data.Actors}</p>
            </div>

             <div>
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
                <button><a href=https://www.imdb.com/title/${imdb} target="_blank">View on IMDb</a</button>
            </div>`

}

