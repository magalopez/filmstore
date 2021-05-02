import { button } from '../button/button.js';
import { CardCart } from '../card-cart/CardCart.js';

export const Cart = (customClass) => {
  const cart = document.createElement("section");
  cart.classList.add("overlay");
  if(customClass) cart.classList.add(customClass);

  let counter = 4;
  let total = 45.99;
  const arraycard = [
    {image: "N/A", title: "ass", year: 2020}, 
    {image: "N/A", title: "ass", year: 2020}, 
    {image: "N/A", title: "ass", year: 2020}, 
    {image: "N/A", title: "ass", year: 2020}];

  const renderCardsCart = (array) => {
    let structureHTML = "";

    array.forEach(element => {
      structureHTML += `${CardCart(element.image, element.title, element.year)}`
    })

    return structureHTML;
  };
  
  const structureHTML = ` <aside class="cart">
                              <section class="cart-header row">
                                <i class="arrowback">
                                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5 33L16.5 22L27.5 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </i>
                                <h3>My films list</h3>
                                <span class="cart-counter">${counter}</span>
                              </section>
                              <section class="cart-body">
                              ${renderCardsCart(arraycard)}
                              </section>
                              <section class="cart-footer">
                                <form>
                                  <input type="text" placeholder="Promo code" />
                                  <button type="button" class="btn">Apply</button>
                                </form>
                                <div class="cart-amount row">
                                  <p>Total</p>
                                  <div class="row">
                                    <span class="">(${counter} ${counter > 1 ? "items" : "item" })</span>
                                    <p><b>${total}</b></p>
                                    <span class="">USD</span>
                                  </div>
                                </div>
                                ${button("comprar", "btn-cyan")}
                              </section>
                            </aside>`;

  cart.innerHTML = structureHTML;
  return cart;
};