import { API_KEY } from './key';
console.log(API_KEY);

async function fetchPopularMovies() {
    try {
        // Fetch API pour récupérer les données
        const result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=09f0b9763031708ebb0cc2b63b5a13af&language=fr-FR&page=1')
        const data = await result.json()
        console.log(data);

        // Const récupere scroll
        const listDiv = document.querySelector('#section_tendances .list');
        const popularMovies = data.results;
        popularMovies.forEach(movie => {
        console.log(movie.poster_path);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        listDiv?.appendChild(domImg);

    });

    } catch (error) {
        console.log(error)
    }
}

// Execute la fonction pour fetch les films à tendance
fetchPopularMovies();

async function fetchTopRatedMovies() {
    try {
        // Fetch API pour récupérer les données
        const result = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=09f0b9763031708ebb0cc2b63b5a13af&language=en-US&page=1')
        const data = await result.json()
        console.log(data);

        const listDiv = document.querySelector('#section_top_rated .list');
        const popularMovies = data.results;
        popularMovies.forEach(movie => {
        console.log(movie.poster_path);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        listDiv?.appendChild(domImg);

    });

    } catch (error) {
        console.log(error)
    }
}

// Execute la fonction pour fetch les films les mieux notés
fetchTopRatedMovies();

async function fetchTopUpcomingMovies() {
    try {
        // Fetch API pour récupérer les données
        const result = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=09f0b9763031708ebb0cc2b63b5a13af&language=en-US&page=1')
        const data = await result.json()
        console.log(data);

        const listDiv = document.querySelector('#section_upcoming .list');
        const popularMovies = data.results;
        popularMovies.forEach(movie => {
        console.log(movie.poster_path);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        listDiv?.appendChild(domImg);

    });

    } catch (error) {
        console.log(error)
    }
}

// Execute la fonction pour fetch les films à venir
fetchTopUpcomingMovies();

