const apiKey='3fd2be6f0c70a2a598f084ddfb75487c';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

// ejemplo de consulta de las peliculas más populares
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1

const main = document.getElementById('contenedor');

getMovies(API_URL)


async function getMovies (url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}



function showMovies (movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${ IMG_PATH + poster_path }" alt="${ title }" />
            <div class="movie-info">
                <h3>${ title }</h3>
                <span class="${ getClassByRate(vote_average) }">${ vote_average }</span>
            </div>
        `;
        main.appendChild(movieElement);
    })
}

function getClassByRate (vote) {
    if (vote >= 8) return 'green';
    else if (vote >= 5) return 'orange';
    else return 'red';
}
