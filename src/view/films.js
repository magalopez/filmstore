import { httpRequest } from '../models/http.js';
import { card } from './components/content/card/card.js';

export const Films = (customClass) => {
  const containerFilms = document.createElement("main");
        containerFilms.classList.add("container");
  if (customClass) containerFilms.classList.add(customClass);

  const keywordsMovies = ["comedy", "terror", "drama", "romantic"];
  
  httpRequest(keywordsMovies[2])
    .then(resp => {
      const { Response : success, Search : data, totalResults } = resp;
      if(success) {
        let cards = "";
        data.forEach(element => {
          cards += `${card(element.Poster, element.Title, element.Year, element.imdbID)}`;
        })
        containerFilms.innerHTML = cards;
      }
    });

  // const buttonLogInEmail = divElemt.querySelector("#login-btn");
  // buttonLogInEmail.addEventListener('click', () => {
  //   loginInOnSubmit();
  //   getName();
  // });

  return containerFilms;
};