import { Films } from '../../view/films.js';
import { FilmsPurchased } from '../../view/purchased.js';
import { Header } from '../../view/components/layout/header/header.js';
import { Cart } from '../../view/components/content/cart/cart.js';
import { ModalDetail } from '../../view/components/content/modal-detail/modalDetail.js';

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

export const changeRoute = route => {
	location.hash = route;
};

export const removeRoute = () => {
  const route = window.location.toString();
  if (route.indexOf("#") > 0) {
    const clean_route = route.substring(0, route.indexOf("#"));
    window.history.replaceState({}, document.title, clean_route);
  }
};

const changeTmp = hash => {
  if (hash === '#/' || hash === '' || hash === '#') return viewTmp('#/movies');
  return viewTmp(hash);
};

const viewTmp = routers => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');

  const options = ["movies", "series", "favorites", "purchased"];
  root.innerHTML = '';

  switch (router) {
    case 'movies':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(ModalDetail());
      root.appendChild(Films("movie","row"));
      break;
    case 'series':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(ModalDetail());
      root.appendChild(Films("series","row"));
      break;
    // case 'favorites':
    //   root.appendChild(Header(options, router));
    //   root.appendChild(Cart());
    //   root.appendChild(ModalDetail());
    //   // root.appendChild(());
    //   break;
    case 'purchased':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(ModalDetail());
      root.appendChild(FilmsPurchased("purchased-films"));
      break;
    case 'cart':
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(ModalDetail());
      root.appendChild(Films("movie","row"));
      break;
    default:
      root.appendChild(Header(options, router));
      root.appendChild(Cart());
      root.appendChild(ModalDetail());
      root.appendChild(Films("movie","row"));
      break;
  }
};