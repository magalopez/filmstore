import { GET_FILM } from '../models/getFilm.js';
import { CardFilm } from './components/content/card-film/CardFilm.js';
import helpers from '../controller/helpers/helpers.js';

export const Movies = (customClass) => {
  const containerFilms = document.createElement("main");
        containerFilms.classList.add("container");
  if (customClass) containerFilms.classList.add(customClass);

  const keywordsMovies = ["comedy", "terror", "drama", "romantic"];
  const randomNum = helpers.randomNumber(keywordsMovies.length);

  const URL = helpers.GET_URL("general", keywordsMovies[randomNum], null,  "movie", 1 );
  const movies = GET_FILM(URL);

  movies.then(data => {
    let structureHTML = "";
    data.forEach((element) => {
      const {Poster, Title, Year, price, imdbID } = element;
      structureHTML += `${CardFilm(Poster, Title, Year, price, imdbID, "Add to card")}`;
      containerFilms.innerHTML = structureHTML;
    });
  });

  return containerFilms;
};
