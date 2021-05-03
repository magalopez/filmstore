import { films } from '../../view/films.js';
import { filmsPurchased } from '../../view/purchased.js';
import { header } from '../../view/components/layout/header/header.js';
import { cart } from '../../view/components/content/cart/cart.js';
import { modalDetail } from '../../view/components/content/modaldetail/modalDetail.js';

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
      root.appendChild(header(options, router));
      root.appendChild(cart());
      root.appendChild(modalDetail());
      root.appendChild(films("movie","row"));
      break;
    case 'series':
      root.appendChild(header(options, router));
      root.appendChild(cart());
      root.appendChild(modalDetail());
      root.appendChild(films("series","row"));
      break;
    case 'purchased':
      root.appendChild(header(options, router));
      root.appendChild(cart());
      root.appendChild(modalDetail());
      root.appendChild(filmsPurchased("purchased-films"));
      break;
    case 'cart':
      root.appendChild(header(options, router));
      root.appendChild(cart());
      root.appendChild(modalDetail());
      root.appendChild(films("movie","row"));
      break;
    default:
      root.appendChild(header(options, router));
      root.appendChild(cart());
      root.appendChild(modalDetail());
      root.appendChild(films("movie","row"));
      break;
  }
};