import { Films } from '../../view/films.js';
import { Header } from '../../view/components/layout/header/header.js';
import { Cart } from '../../view/components/content/cart/cart.js';

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') return viewTmp('#/home');
  return viewTmp(hash);
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  console.log('router', router);

  const options = ["Movies", "Series", "Favorites", "My Movies"];
  root.innerHTML = '';

  root.appendChild(Header(options));
  root.appendChild(Cart());

  switch (router) {
    case 'home':
      // root.innerHTML = '';
      root.appendChild(Films("films-container"));
      break;
    // case 'register':
    //   root.appendChild(registerScreen());
    //   break;
    // case 'profile': {
    //   root.innerHTML = '';
    //   const showProfile = (user) => {
    //     getName(user)
    //     .then((name) => {
    //       viewPostdb((posts) => {
    //         root.innerHTML = '';
    //         root.appendChild(showActUser({
    //           ...user,
    //           name,
    //         }, posts))
    //       })
    //     });
    //   }
    //   const u = getUser();
    //   if (u) {
    //     showProfile(u)
    //   } else {
    //     activeUser(showProfile)
    //       if(u){
    //         showProfile(u)
    //       }
    //       // activeUser()
    //   }
    //   break;
    // }
    default:
      root.appendChild(Films("container"));
      break;
  }
}