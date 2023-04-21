import { API_KEY } from './key';

// Affichage des films dans la page d'accueil

async function fetchPopularMovies() {
  try {
      // Fetch API pour récupérer les données
      const result: Response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`);
      const data: any = await result.json();

      // Const récupere scroll
      const listDiv: Element | null = document.querySelector('#section_tendances .list');
      const popularMovies: any = data.results;
      popularMovies.forEach(movie => {

          const domImg: HTMLImageElement = document.createElement('img');
          domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
          domImg.id = movie.id.toString();
          listDiv?.appendChild(domImg);
      });

      // Récupération des images et ajout d'un écouteur d'événements sur chaque image
      const images: NodeListOf<Element> = document.querySelectorAll('.list img');
      images.forEach(image => {
      image.addEventListener('click', async () => {
        const movieId = image.id;
        window.location.href = `/assets_html/info.html?id=${encodeURIComponent(movieId)}`;
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
        domImg.id = movie.id.toString();
        listDiv?.appendChild(domImg);

    });

    // Récupération des images et ajout d'un écouteur d'événements sur chaque image
    const images: NodeListOf<Element> = document.querySelectorAll('.list img');
    images.forEach(image => {
    image.addEventListener('click', async () => {
      const movieId = image.id;
      window.location.href = `/assets_html/info.html?id=${encodeURIComponent(movieId)}`;
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
        domImg.id = movie.id.toString();
        listDiv?.appendChild(domImg);

  });

     // Récupération des images et ajout d'un écouteur d'événements sur chaque image
     const images: NodeListOf<Element> = document.querySelectorAll('.list img');
     images.forEach(image => {
     image.addEventListener('click', async () => {
       const movieId = image.id;
       window.location.href = `/assets_html/info.html?id=${encodeURIComponent(movieId)}`;
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
const PAGE_SIZE = 20;
let page: number = 1;
let totalResults: number = 0;
let searchContent: string = '';

// Fonction pour récupérer les films de la recherche
async function fetchSearchMovies() {
  try {
    // Fetch API pour récupérer les données
    const result: Response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchContent)}&page=${page}`);
    const data: any = await result.json();

    const searchMovies: any = data.results;
    totalResults = data.total_results;
    resultList.innerHTML = '';
    searchMovies.forEach(movie => {
      if (movie.poster_path !== null) {
        const domImg: HTMLImageElement = document.createElement('img');
        domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
        domImg.id = movie.id.toString();
        resultList?.appendChild(domImg);
      }
    });

    // Récupération des images et ajout d'un écouteur d'événements sur chaque image
      const images: NodeListOf<Element> = document.querySelectorAll('.list img');
      images.forEach(image => {
      image.addEventListener('click', async () => {
        const movieId: string = image.id;
        window.location.href = `/assets_html/info.html?id=${encodeURIComponent(movieId)}`;
    });
  });

    // Mise à jour du titre de la page de recherche avec le contenu de la recherche
    pageTitle.textContent = `Résultats pour "${searchContent}"`;

    // Mise à jour de la pagination
    const totalPages: number = Math.ceil(totalResults / PAGE_SIZE);
    if(page === 1) {
    previousPageButton.disabled 
    previousPageButton.classList.add('hidden');
    } else {
    previousPageButton.classList.remove('hidden');
    }
     if(page === totalPages) {
      nextPageButton.disabled 
      nextPageButton.classList.add('hidden');
     }
    pageNumber.textContent = ` Page ${page}`.toString();
  } catch (error) {
    console.log(error);
  }
}

// Récupération du contenu de la recherche à partir de l'URL
const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
searchContent = searchParams.get('q') ?? '';
if (searchContent) {
  fetchSearchMovies();
}

// Ajout d'un événement submit au formulaire de recherche
searchForm.addEventListener('submit', async (event) => {
  // Empêche le comportement par défaut du formulaire
  event.preventDefault();

  // Récupération du contenu de la recherche
  searchContent = searchInput.value.trim();
  if (searchContent) {
    // Redirection vers la page de recherche
    window.location.href = `/assets_html/search.html?q=${encodeURIComponent(searchContent)}`;
  }
});

// Ajout d'un événement "click" sur les boutons de pagination
if (previousPageButton) {
  previousPageButton.addEventListener('click', () => {
    if (page > 1) {
      page--;
      fetchSearchMovies();
    }
  });
}

if (nextPageButton) {
  nextPageButton.addEventListener('click', () => {
    const totalPages = Math.ceil(totalResults / PAGE_SIZE);
    if (page < totalPages) {
      page++;
      fetchSearchMovies();
    }
  });
}


// Récupération et affichage des informations des films dans la page info.html
// Récupération des id des films
async function getmoviebyId (movieId) {
  const movierequest = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`);
  const datamovierequest = await movierequest.json();
  return datamovierequest;
}

// Récupère les informations du film pour les afficher dans les div correspondantes
function displayMovieInfo(movie: any): void {
  console.log(movie);
  const title = document.querySelector('#infos h2') as HTMLHeadingElement;
  const date = document.querySelector('#infos .date') as HTMLElement;
  const resume = document.querySelector('#infos .resume') as HTMLElement;
  const infosBanniereSection = document.querySelector('#infos_bannière') as HTMLElement;

  if (title !== null) {
    title.textContent = movie.title;
  }
  
  if (date !== null) {
    date.textContent = new Date(movie.release_date).toLocaleDateString('fr-FR');
  }
            
  if (resume !== null) {
    resume.textContent = movie.overview;
  }
  
  if (infosBanniereSection !== null) {
    infosBanniereSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;
  }
}

const infoParams: URLSearchParams = new URLSearchParams(window.location.search);
const infoContent = infoParams.get('id') ?? '';
if (infoContent) {
  async function test () {
    const movie: any = await getmoviebyId(infoContent);
    displayMovieInfo(movie);  
  }
  test ();
}

// Mise en place des audios
const audio: HTMLAudioElement | null = document.querySelector('#audio');
const gif: Element | null = document.querySelector('#gif');
const balthazar = document.querySelector('#balthazar');
function playaudio () {
  if (audio) {
    audio.play();
  }
}

function playbalthazar () {
  if(balthazar) {
    balthazar.play();
  }
}

const play: Element | null = document.querySelector('.play');
if (play) {
  play.addEventListener('click', () => {
    gif.classList.remove('hidden');
    playaudio();
    setTimeout(() => {
      gif.classList.add('hidden');
    }, 3000); 
  });
}

const info = document.querySelector('.info');
if(info) {
  info.addEventListener('click', () => {
    playbalthazar();
  })
}











