const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");

// load movies from API
async function loadMovies(searchTerm){
    const URL = "https://omdbapi.com/?s=$(searchTerm)6page=16apikey=fc1fef96";
    const res = await fetch('${URL}');
    const data = await res.json();
    //console.log(data.Search);
    if(data.Search == 'true') displayMovieList(data.Search);
}

function findMovies(){
    let searchTerm = (movies.searchBox.value).trim();
    //console.log(searchTerm);
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    }else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies) {
    searchList.innerHTML = "";
    for(idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement("div");
        movieListItem.dataset.id = movies[idx].imdbID;//set the id of the movie in data-id
        movieListItem.classList.add("search-list-item");

        if(movies[idx].Poster != "N/A"){
            moviePoster = movies[idx].Poster;
        }else {
            moviePoster = "image_not_found.png";
        }

        movieListItem.innerHTML = 'newFunction()';

    searchList.appendChild(movieListItem);
    }

    function newFunction() {
        <div class="search-list-item">
            <><div class="search-item-thumbnail">
                <img src="${moviePoster}">
                </></div><div class="search-item-info">
                    <h3>${movies[idx].Title}</h3>
                    <p>${movies[idx].Year}</p>
                </div></>
        </div>;
    }
}