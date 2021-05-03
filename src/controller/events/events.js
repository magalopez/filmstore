import helpers from '../helpers/helpers.js';
import { GET_FILM } from '../../models/getFilm.js';

window.addToCart = async (key, price) => {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = JSON.parse(cartItems);
  if(!cartItems) cartItems = [];

  const URL = helpers.GET_URL("id", key, null,  null, null );
  const movie = await GET_FILM(URL);
  movie['price'] = price;
  cartItems.push(movie);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // console.log('cartItems', cartItems);
};

window.deleteToCart = (id) => {
  console.log("delete", id);
};

window.handleCart = () => {
  const cart = document.querySelector(".section-cart");

  if(cart.classList.value.includes("hidden"))
  {
    cart.classList.remove("hidden");
    cart.classList.add("show");
  }
  else
  {
    cart.classList.remove("show");
    cart.classList.add("hidden");
  }
};

window.buyFilms = () => {
  console.log("buy")
};