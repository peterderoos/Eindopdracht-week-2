let movieList = document.querySelector("#movieList");
let radios = document.getElementsByName("search")
Array.from(radios)

const addMoviesToDom = movies => {
    const moviesToList = movies.map(movie => {
        let newList = document.createElement('li');
        newList.className = 'movie-item'
        let newImg = document.createElement('img');
        newImg.src = movie.Poster;
        newImg.className = 'img-item';
        const newA = document.createElement('a');
        newA.href = 'https://www.imdb.com/title/' + movie.imdbID;
        newList.appendChild(newA);
        newA.appendChild(newImg);
        return newList;
    });
    moviesToList.forEach(movie => {
        movieList.appendChild(movie);
    });
};
addMoviesToDom(movies);

let filterMovies = (wordInMovieTitle) => {
    let movieTitlesWithWord = movies.filter(movie => {
        return movie.Title.includes(wordInMovieTitle)
    }).map(movies => {
        return movies;
    });
    movieList.querySelectorAll('li').forEach(item => item.remove());
    addMoviesToDom(movieTitlesWithWord);
}

let filterLatestMovies = (movies) => {
    movieList.querySelectorAll('li').forEach(item => item.remove());
    return parseInt(movies.Year) >= 2014;
}

let clickedMovie = (x) => {
    switch (x) {
        case 'latest':
            let latest = movies.filter(filterLatestMovies);
            addMoviesToDom(latest);

            break;
        case 'avengers':
            filterMovies('Avengers');
            break;
        case 'xmen':
            filterMovies('X-Men');
            break;
        case 'princess':
            filterMovies('Princess');
            break;
        case 'batman':
            filterMovies('Batman');
            break;
        default:
            addMoviesToDom(movies);
    };
};

