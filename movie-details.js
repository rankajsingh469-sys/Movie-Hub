
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
    movieDetail.innerHTML = `
  <div class="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start text-slate-100">
    
    <!-- Left Column: Poster -->
    <div class="w-full md:w-[300px] flex-shrink-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] rounded-2xl  overflow-hidden border  border-neutral-800">
      <img src="${data.Poster}" alt="${data.Title}" class="w-full h-auto object-cover block">
    </div>
    
    <!-- Right Column: Details Content -->
    <div class="flex-1 flex flex-col">
      
      <!-- Title -->
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">${data.Title}</h2>
      
      <!-- Metadata Badges Row -->
      <section class="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold">
        <span class="bg-[#1e293b] text-[#9ca3af] px-3 py-1.5 rounded-sm border border-neutral-800">${data.Released}</span>
        <span class="bg-[#1e293b] text-[#9ca3af] px-3 py-1.5 rounded-sm border border-neutral-800">${data.Rated}</span>
        <span class="bg-[#1e293b] text-[#9ca3af] px-3 py-1.5 rounded-sm border border-neutral-800">${data.Runtime}</span>
        <span class="text-[#ef4444] px-1">${data.Genre}</span>
        <span class="text-[#f59e0b] flex items-center gap-1 font-bold ml-2">
          <span class="text-base leading-none">★</span> IMDb: ${data.imdbRating} / 10
        </span>
      </section>
      
      <!-- Plot Overview Section -->
      <div class="mb-8">
        <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280] mb-2">Plot Overview</p>
        <p class="text-sm md:text-base text-[#d1d5db] leading-relaxed font-normal">${data.Plot}</p>
      </div>
      
      <!-- Meta Details Info Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-8">
        <section class="flex flex-col gap-1">
          <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280]">Director</p>
          <p class="text-sm text-white font-medium">${data.Director}</p>
        </section>
        <section class="flex flex-col gap-1">
          <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280]">Writer</p>
          <p class="text-sm text-white font-medium">${data.Writer}</p>
        </section>
      </div>
      
      <!-- Actors Section -->
      <div class="mb-8">
        <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280] mb-1">Actors</p>
        <p class="text-sm text-white font-medium">${data.Actors}</p>
      </div>
      
      <!-- Production Country & Language Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-8">
        <section class="flex flex-col gap-1">
          <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280]">Language</p>
          <p class="text-sm text-white font-medium">${data.Language}</p>
        </section>
        <section class="flex flex-col gap-1">
          <p class="text-[11px] uppercase tracking-widest font-black text-[#6b7280]">Country</p>
          <p class="text-sm text-white font-medium">${data.Country}</p>
        </section>
      </div>
      
      <!-- Action Buttons -->
      <div class="mt-4">
        <a href="https://www.imdb.com/title/${imdb}" target="_blank" class="inline-flex items-center justify-center bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded shadow-md transition-all duration-150 ease-in-out gap-1.5">
          View on IMDb
          <svg class="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
      
    </div>
  </div>
`;


}

