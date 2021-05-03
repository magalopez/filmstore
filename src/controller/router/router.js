import { Films } from '../../view/films.js';
import { FilmsPurchased } from '../../view/*purchased.js';
import { Header } from '../../view/components/layout/header/header.js';
import { Cart } from '../../view/components/content/cart/cart.js';

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') return viewTmp('#/movies');
  return viewTmp(hash);
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  console.log('router', router);

  const options = ["movies", "series", "favorites", "purchased"];
  root.innerHTML = '';

  switch (router) {
    case 'movies':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(Films("movie","row"));
      break;
    case 'series':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(Films("series","row"));
      break;
    case 'favorites':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      // root.appendChild(());
      break;
    case 'purchased':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      // root.appendChild(FilmsPurchased());
      break;
    default:
      root.appendChild(Films("movie","row"));
      break;
  }
}