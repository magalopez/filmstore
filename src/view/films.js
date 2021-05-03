import { GET_FILM } from '../models/getFilm.js';
import { CardFilm } from './components/content/card-film/CardFilm.js';
import helpers from '../controller/helpers/helpers.js';

export const Films = (type, customClass) => {
  const containerFilms = document.createElement("main");
        containerFilms.classList.add("container");
  if (customClass) containerFilms.classList.add(customClass);

  const keywordsFilms = ["comedy", "terror", "drama", "romantic"];
  const randomNum = helpers.RANDOM_NUMBER(keywordsFilms.length);

  const URL = helpers.GET_URL("general", keywordsFilms[randomNum], null, type, 1 );
  const films = GET_FILM(URL);

  films.then(data => {
    let structureHTML = "";
    data.forEach((element) => {
      const {Poster, Title, Year, price, imdbID } = element;
      const btnEvent = `addToCart('${imdbID}',${price})`;

      structureHTML += `${CardFilm(false, Poster, Title, Year, price, imdbID, "Add to card", btnEvent)}`;
      containerFilms.innerHTML = structureHTML;
    });
  });

  return containerFilms;
};
