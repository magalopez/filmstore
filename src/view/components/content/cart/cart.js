import { button } from '../button/button.js';
import { CardCart } from '../card-cart/CardCart.js';
import helpers from '../../../../controller/helpers/helpers.js';

export const Cart = (customClass) => {
  const cart = document.createElement("section");
  cart.classList.add("section-cart");
  cart.classList.add("overlay");
  cart.classList.add("hidden");
  if(customClass) cart.classList.add(customClass);

  let counter;
  let cartItems = helpers.GET_LOCALSTORAGE('cartItems');

  if(cartItems) counter = cartItems.length;

  const getTotal = (array) => {
    let result = 0;
    array.forEach(element => {
      const { price } = element;
      result += price;
    });
    return result;
  };

  const renderCardsCart = (array) => {
    let structureHTML = "";
    array.forEach(element => {
      const { imdbID, Poster, Title, imdbRating, Director, price } = element;
      structureHTML += `${CardCart( imdbID, Poster, Title, imdbRating, Director, price)}`
    });
    return structureHTML;
  };

  const renderNoCardsCart = () => {
    return `<div class="cart-not-items column">
              <i>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.0001 73.3332C58.4096 73.3332 73.3334 58.4093 73.3334 39.9998C73.3334 21.5903 58.4096 6.6665 40.0001 6.6665C21.5906 6.6665 6.66675 21.5903 6.66675 39.9998C6.66675 58.4093 21.5906 73.3332 40.0001 73.3332Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M53.3334 53.3332C53.3334 53.3332 48.3334 46.6665 40.0001 46.6665C31.6667 46.6665 26.6667 53.3332 26.6667 53.3332" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30 30H30.0313" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M50 30H50.0313" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </i>
              <h3>No films in your cart</h3>
            </div>`
  }

  const event = 'buyFilms()';
  const disabled = cartItems && cartItems.length ? '' : 'disabled';
  
  const structureHTML = ` <aside class="cart">
                            <section class="cart-header row">
                              <i class="arrowback" onclick={handleCart()}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M27.5 33L16.5 22L27.5 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              </i>
                              <h3>My films list</h3>
                              <span class="cart-counter">${cartItems && cartItems.length? counter : 0}</span>
                            </section>
                            <section class="cart-body">
                            ${cartItems && cartItems.length? renderCardsCart(cartItems) : renderNoCardsCart()}
                            </section>
                            <section class="cart-footer">
                              <form>
                                <input type="text" placeholder="Promo code" />
                                <button type="button" class="btn">Apply</button>
                              </form>
                              <div class="cart-amount row">
                                <p>Total</p>
                                <div class="row">
                                  <span class="">(${cartItems && cartItems.length? counter : 0} ${counter > 1 ? "items" : "item" })</span>
                                  <p>$<b>${cartItems && cartItems.length? getTotal(cartItems) : 0}</b></p>
                                  <span>USD</span>
                                </div>
                              </div>
                              ${button(event, "buy", "btn-cyan", disabled)}
                            </section>
                          </aside>`;

  cart.innerHTML = structureHTML;

  const route =  window.location.hash.substr(2,  window.location.hash.length - 2)
  if(route === 'cart' && cart.classList.value.includes("hidden"))
  {
    cart.classList.remove("hidden");
    cart.classList.add("show");
  }

  return cart;
};