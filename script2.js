//Het selecteren van alle radiobuttons in een variabele en hiervan een array maken. 
const allRadioButtons = document.getElementsByName('search');
console.log(allRadioButtons)
let ulMoviesOverview = document.querySelector("#moviesOverview");
Array.from(allRadioButtons);

const addMoviesToDom = movies => {
    const moviesToList = movies.map(movie => {
        const newLi = document.createElement('li');
        newLi.className = 'movie-list-item'
        const newImg = document.createElement('img');
        newImg.src = movie.Poster;
        newImg.className = 'image-item';
        const newA = document.createElement('a');
        newA.href = 'https://www.imdb.com/title/' + movie.imdbID;
        newLi.appendChild(newA);
        newA.appendChild(newImg);
        return newLi;
    });
    moviesToList.forEach(movie => {
        ulMoviesOverview.appendChild(movie);
    });
};

//Een eventlistener vastmaken aan elke radiobutton. 
for (index = 0; index < allRadioButtons.length; index++) {
    allRadioButtons[index].addEventListener('change', () => {
        handleOnChangeEventRadio(event);
    });
};
//Functie maken die wordt afgevuurd als een van de radiobuttons is aangevinkt.
const handleOnChangeEventRadio = event => {
    switch (event.target.id) {
        case 'nieuwste-films':
            filterLatersMovies();
            break;
        case 'avengers':
            filterMovies('Avengers');
            break;
        case 'x-men':
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
//De functie voor de filters op titel
const filterMovies = wordInMovieTitle => {
    const movieTitlesWithWord = movies.filter(movie => {
        return movie.Title.includes(wordInMovieTitle)
    }).map(movies => {
        return movies;
    });
    ulMoviesOverview.querySelectorAll('li').forEach(item => item.remove());
    // addMoviesToDom(movieTitlesWithWord);
};

addMoviesToDom(movies);