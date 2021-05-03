import { cardFilm } from './components/content/cardfilm/cardFilm.js';
import helpers from '../controller/helpers/helpers.js';

export const filmsPurchased = (customClass) => {
  const containerFilmsPurchased = document.createElement("main");
        containerFilmsPurchased.classList.add("container");
  if (customClass) containerFilmsPurchased.classList.add(customClass);
  
  const films = helpers.GET_LOCALSTORAGE('myFilms');

  /* series */
  const containerSeries = document.createElement("section");
  containerSeries.classList.add("row");

  const titleSeries = document.createElement("h4");
  const contentTitleSeries = document.createTextNode("Series");
  titleSeries.appendChild(contentTitleSeries);
  
  let seriesStructureHTML = "";
  
  const series = films.filter(element => element.Type === "series");
  series.forEach((element) => {
    const { Poster, Title, Year, imdbID } = element;
    const btnEvent = `playFilm('${imdbID}')`;
    seriesStructureHTML += `${cardFilm(true, Poster, Title, Year, null, imdbID, "play now", btnEvent)}`;
    containerSeries.innerHTML = seriesStructureHTML;
  });
  if(series.length) containerFilmsPurchased.appendChild(titleSeries);
  containerFilmsPurchased.appendChild(containerSeries);

  /* movies */

  const containerMovies = document.createElement("section");
  containerMovies.classList.add("row");
  const titleMovies = document.createElement("h4");
  const contentTitleMovies = document.createTextNode("Movies");
  titleMovies.appendChild(contentTitleMovies);

  let moviesStructureHTML = "";
  const movies = films.filter(element => element.Type === "movie");

  movies.forEach((element) => {
    const { Poster, Title, Year, imdbID } = element;
    const btnEvent = `playFilm('${imdbID}')`;
    moviesStructureHTML += `${cardFilm(true, Poster, Title, Year, null, imdbID, "play now", btnEvent)}`;
    containerMovies.innerHTML = moviesStructureHTML;
  });

  if(movies.length) containerFilmsPurchased.appendChild(titleMovies);
  containerFilmsPurchased.appendChild(containerMovies);
    
  return containerFilmsPurchased;
};
