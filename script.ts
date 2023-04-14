import { API_KEY } from './key';

async function fetchPopularMovies() {
    try {
        // Fetch API pour récupérer les données
        const result: Response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
        const data: any = await result.json()

        // Const récupere scroll
        const listDiv: Element | null = document.querySelector('#section_tendances .list');
        const popularMovies: any = data.results;
        popularMovies.forEach(movie => {

        const domImg: HTMLImageElement = document.createElement('img');
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
        const result: Response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const data: any = await result.json()

        const listDiv: Element | null = document.querySelector('#section_top_rated .list');
        const popularMovies: any = data.results;
        popularMovies.forEach(movie => {

        const domImg: HTMLImageElement = document.createElement('img');
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
        const result: Response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        const data: any = await result.json()

        const listDiv: Element | null = document.querySelector('#section_upcoming .list');
        const popularMovies: any = data.results;
        popularMovies.forEach(movie => {

        const domImg: HTMLImageElement = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        listDiv?.appendChild(domImg);

    });

    } catch (error) {
        console.log(error)
    }
}

// Execute la fonction pour fetch les films à venir
fetchTopUpcomingMovies();

// Import des éléments HTML nécessaires du formulaire de recherche dans le header
const searchForm = document.querySelector('.search-form') as HTMLFormElement;
const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;

// Import des éléments nécessaires de la page search.html
const pageTitle = document.querySelector('#search h2') as HTMLHeadingElement;
const resultList = document.querySelector('#search .list') as HTMLDivElement;

// Ajout d'un événement submit au formulaire de recherche
searchForm.addEventListener('submit', async (event) => {
  // Empêche le comportement par défaut du formulaire
  event.preventDefault();

  // Récupére le contenu de la recherche
  const searchContent: string = searchInput.value.trim();
  if(searchContent) {
  // Rediriger vers la page de recherche 
  window.location.href = `/assets_html/search.html?q=${encodeURIComponent(searchContent)}`;
  }
});

// Récupérer le contenu de la recherche à partir de l'URL
const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
const searchContent: string | null = searchParams.get('q');

async function fetchSearchMovies() {
    try {
      // Fetch API pour récupérer les données
      const result: Response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchContent)}`);
      const data: any = await result.json();
  
      const searchMovies = data.results;
      searchMovies.forEach(movie => {
        if (movie.poster_path !== null) {
          console.log(movie.poster_path);
  
          const domImg: HTMLImageElement = document.createElement('img');
          domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
          resultList?.appendChild(domImg);
        }
      });
  
      // Mise à jour du titre de la page de recherche avec le contenu de la recherche
      pageTitle.textContent = `Résultats pour "${searchContent}"`;
    } catch (error) {
      console.log(error);
    }
  }
fetchSearchMovies();


