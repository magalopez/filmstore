import helpers from '../helpers/helpers.js';
import { GET_FILM } from '../../models/getFilm.js';
import { changeRoute, removeRoute } from '../router/router.js';

window.addToCart = async (key, price) => {
  let cartItems = helpers.GET_LOCALSTORAGE('cartItems');
  if(!cartItems) cartItems = [];

  const URL = helpers.GET_URL("id", key, null,  null, null );
  const movie = await GET_FILM(URL);
  movie['price'] = price;
  cartItems.push(movie);

  helpers.SET_LOCALSTORAGE('cartItems',cartItems);
};

window.deleteToCart = (id) => {
  let cartItems = helpers.GET_LOCALSTORAGE('cartItems');
  
  const index = cartItems.findIndex(element => element.imdbID === id);
  cartItems.splice(index, 1);

  helpers.SET_LOCALSTORAGE('cartItems', cartItems);

  removeRoute();
  changeRoute('#/cart');
};

window.handleCart = () => {
  const cart = document.querySelector(".section-cart");
  if(cart.classList.value.includes("hidden"))
  {
    changeRoute("#/cart")
    cart.classList.remove("hidden");
    cart.classList.add("show");
  }
  else
  {
    removeRoute();
    cart.classList.remove("show");
    cart.classList.add("hidden");
  }
};

window.buyFilms = () => {
  const cartItems = helpers.GET_LOCALSTORAGE('cartItems');

  let myFilms = helpers.GET_LOCALSTORAGE('myFilms');
  if(!myFilms) myFilms = [];

  cartItems.forEach((element) => {
    myFilms.push(element);
  })

  helpers.SET_LOCALSTORAGE('myFilms', myFilms);
  helpers.REMOVE_LOCALSTORAGE('cartItems');
};

window.handleModalDetail = (id) => {
  const modal = document.querySelector(".section-modal");
  
  if(modal.classList.value.includes("hidden"))
  {
    changeRoute(`#/detail/${id}`)
    modal.classList.remove("hidden");
    modal.classList.add("show");
  }
  else
  {
    removeRoute();
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
};

window.playFilm = (id) => {
  console.log('PLAY', id)
};
 

export const validateFilm = async (key) => {
  const cartItems = helpers.GET_LOCALSTORAGE('cartItems');
  const myFilms = helpers.GET_LOCALSTORAGE('myFilms');
 
  const allFilms = [...cartItems, ...myFilms];
  const currentFilm = allFilms.filter((element) => element.imdbID === key);

  if(currentFilm.length)
  {
    return currentFilm;
  }
  else
  {
    const URL = helpers.GET_URL("id", key, null,  null, null );
    const movie = await GET_FILM(URL);
    return movie;
  }
};