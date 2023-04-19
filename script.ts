import { API_KEY } from './key';

async function fetchPopularMovies() {
    try {
        // Fetch API pour récupérer les données
        const result: Response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
        const data: any = await result.json();

        // Const récupere scroll
        const listDiv: Element | null = document.querySelector('#section_tendances .list');
        const popularMovies: any = data.results;
        popularMovies.forEach(movie => {

        const domImg: HTMLImageElement = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        domImg.id = movie.id;
        listDiv?.appendChild(domImg);
    });

    // Récupération des id des films
    async function getmoviebyId (movie_id) {
    const movierequest = await fetch (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=fr-FR`);
    const datamovierequest = await movierequest.json();
    return datamovierequest;
    }

    // Récupère les informations du film pour les afficher dans les div correspondantes
    function displayMovieInfo(movie: any): void {
    const infosSection: HTMLElement | null = document.getElementById('infos');
    const title: any = movie.original_title;
    const date: any = movie.release_date;
    const resume: any = movie.overview;
    const actors: any = movie.credits.cast;
    const genre: any = movie.genres;
    const rated: any = movie.vote_average;
    
    if(infosSection) {
    console.log(infosSection);
    infosSection.querySelector('h2').textContent = title;
    console.log(title);
    infosSection.querySelector('.date').textContent += date;
    console.log(date);
    infosSection.querySelector('.resume').textContent = resume;
    console.log(resume);
    infosSection.querySelector('.actors').textContent = `Distribution : ${actors.map((actor: any) => actor.name).join(', ')}`;
    console.log(actors);
    infosSection.querySelector('.genre').textContent = `Genre : ${genre.map((genre: any) => genre.name).join(', ')}`;
    console.log(genre);
    infosSection.querySelector('.rated').textContent = `Recommandé à ${rated}%`;
    console.log(rated);
    const infosBanniereSection: HTMLElement | null = document.getElementById('infos_bannière');
    infosBanniereSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    }
   }

   // Récupération des images et ajout d'un écouteur d'événements sur chaque image
   const images: NodeListOf<Element> = document.querySelectorAll('.list img');
   console.log(images)
   images.forEach(image => {
    image.addEventListener('click', async (e) => {
    // Récupération des informations du film
    console.log(e.target.id);
    const movie: any = await getmoviebyId(e.target.id);
    // Affichage des informations du film sur la page info.html
    displayMovieInfo(movie);    
    // Redirection vers la page info.html
    window.location.href = '/assets_html/info.html';
    });
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

     // Récupère les informations du film pour les afficher dans les div correspondantes
    function displayMovieInfo(movie: any): void {
    const infosSection: HTMLElement | null = document.getElementById('infos');
    if(infosSection) {
    infosSection.querySelector('h2').textContent = movie.original_title;
    infosSection.querySelector('.date').textContent += movie.release_date;
    infosSection.querySelector('.resume').textContent = movie.overview;
    infosSection.querySelector('.actors').textContent = `Distribution : ${movie.credits.cast.map((actor: any) => actor.name).join(', ')}`;
    infosSection.querySelector('.genre').textContent = `Genre : ${movie.genres.map((genre: any) => genre.name).join(', ')}`;
    infosSection.querySelector('.rated').textContent = `Recommandé à ${movie.vote_average}%`;
    const infosBanniereSection: HTMLElement | null = document.getElementById('infos_bannière');
    infosBanniereSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    }
   }

   // Récupération des images et ajout d'un écouteur d'événements sur chaque image
   const images: NodeListOf<Element> = document.querySelectorAll('.list img');
   console.log(images)
   images.forEach(image => {
    image.addEventListener('click', async () => {  // Ajout du paramètre event
    // Récupération des informations du film
    const movie: any = await fetchTopRatedMovies();
    // Affichage des informations du film sur la page info.html
     displayMovieInfo(movie);
    // Redirection vers la page info.html
    window.location.href = '/assets_html/info.html';
    });
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

     // Récupère les informations du film pour les afficher dans les div correspondantes
    function displayMovieInfo(movie: any): void {
    const infosSection: HTMLElement | null = document.getElementById('infos');
    if(infosSection) {
    infosSection.querySelector('h2').textContent = movie.original_title;
    infosSection.querySelector('.date').textContent += movie.release_date;
    infosSection.querySelector('.resume').textContent = movie.overview;
    infosSection.querySelector('.actors').textContent = `Distribution : ${movie.credits.cast.map((actor: any) => actor.name).join(', ')}`;
    infosSection.querySelector('.genre').textContent = `Genre : ${movie.genres.map((genre: any) => genre.name).join(', ')}`;
    infosSection.querySelector('.rated').textContent = `Recommandé à ${movie.vote_average}%`;
    const infosBanniereSection: HTMLElement | null = document.getElementById('infos_bannière');
    infosBanniereSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    }
   }

   // Récupération des images et ajout d'un écouteur d'événements sur chaque image
   const images: NodeListOf<Element> = document.querySelectorAll('.list img');
   console.log(images)
   images.forEach(image => {
    image.addEventListener('click', async () => {  // Ajout du paramètre event
    const movie: any = await fetchTopUpcomingMovies();
    // Affichage des informations du film sur la page info.html
     displayMovieInfo(movie);
    // Redirection vers la page info.html
    window.location.href = '/assets_html/info.html';
    });
  });

    } catch (error) {
        console.log(error)
    }
}

// Execute la fonction pour fetch les films à venir
fetchTopUpcomingMovies();



// Barre de recherche et pagination
// Import des éléments nécessaires de la page search.html
const pageTitle = document.querySelector('#search h2') as HTMLHeadingElement;
const resultList = document.querySelector('#search .list') as HTMLDivElement;
const previousPageButton = document.querySelector('#previous-page') as HTMLButtonElement;
const nextPageButton = document.querySelector('#next-page') as HTMLButtonElement;
const pageNumber = document.querySelector('#page-number') as HTMLSpanElement;
const searchForm = document.querySelector('.search-form') as HTMLFormElement;
const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;

// Constantes pour gérer la pagination
const PAGE_SIZE = 10;
let currentPage = 1;
let totalResults = 0;

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

async function fetchSearchMovies(page: number) {
    try {
      // Fetch API pour récupérer les données
      const result: Response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchContent)}&page=${page}`);
      const data: any = await result.json();
  
      const searchMovies = data.results;
      totalResults = data.total_results;
      resultList.innerHTML = '';
      searchMovies.forEach(movie => {
        if (movie.poster_path !== null) {
          console.log(movie.poster_path);
  
          const domImg: HTMLImageElement = document.createElement('img');
          domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
          resultList?.appendChild(domImg);
        }
      });

       // Récupère les informations du film pour les afficher dans les div correspondantes
    function displayMovieInfo(movie: any): void {
    const infosSection: HTMLElement | null = document.getElementById('infos');
    if(infosSection) {
    infosSection.querySelector('h2').textContent = movie.original_title;
    infosSection.querySelector('.date').textContent += movie.release_date;
    infosSection.querySelector('.resume').textContent = movie.overview;
    infosSection.querySelector('.actors').textContent = `Distribution : ${movie.credits.cast.map((actor: any) => actor.name).join(', ')}`;
    infosSection.querySelector('.genre').textContent = `Genre : ${movie.genres.map((genre: any) => genre.name).join(', ')}`;
    infosSection.querySelector('.rated').textContent = `Recommandé à ${movie.vote_average}%`;
    const infosBanniereSection: HTMLElement | null = document.getElementById('infos_bannière');
    infosBanniereSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
    }
   }

   // Récupération des images et ajout d'un écouteur d'événements sur chaque image
   const images: NodeListOf<Element> = document.querySelectorAll('.list img');
   console.log(images)
   images.forEach(image => {
    image.addEventListener('click', async () => {  // Ajout du paramètre event
    const movie: any = await fetchSearchMovies(page);
    // Affichage des informations du film sur la page info.html
     displayMovieInfo(movie);
    // Redirection vers la page info.html
    window.location.href = '/assets_html/info.html';
    });
  });
  
      // Mise à jour du titre de la page de recherche avec le contenu de la recherche
      pageTitle.textContent = `Résultats pour "${searchContent}"`;

      // Mise à jour de la pagination
      const totalPages = Math.ceil(totalResults / PAGE_SIZE);
      previousPageButton.disabled = currentPage === 1;
      nextPageButton.disabled = currentPage === totalPages;
      pageNumber.textContent = currentPage.toString();
    } catch (error) {
      console.log(error);
    }
}

// Récupérer le contenu de la recherche à partir de l'URL
const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
const searchContent: string | null = searchParams.get('q');
fetchSearchMovies(currentPage);

// Ajout d'un événement "click" sur les boutons de pagination
if(previousPageButton) {
previousPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchSearchMovies(currentPage);
  }
});
}

if(nextPageButton) {
nextPageButton.addEventListener('click', () => {
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);
  if (currentPage < totalPages) {
    currentPage++;
    fetchSearchMovies(currentPage);
  }
});
}



// Pop-up de la section films et séries






