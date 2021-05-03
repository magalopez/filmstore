export const cardCart = ( ID, poster, title, rating, director, price ) => {
  
  return (
    `<section class="card-cart row">
      <img class="card-cart-image"src="${poster === "N/A" ? "./assets/no-image.png" : poster}" />
      <div class="card-cart-info column">
        <h1 class="overflow-ellipsis">${title}</h1>
        <section class="row">
          <div class=" card-cart-rating row">
            <i class="card-cart-icon star">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#F1B418" stroke="#F1B418" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
            <span>${rating}</span>
          </div>
          ${director?'<p class="overflow-ellipsis">'+director+'</p>':""}
        </section>
        ${price?'<span class="card-cart-price">$ '+price+'</span>':""}
      </div>
      <i class="icon-close" onclick={deleteToCart('${ID}')}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 4L12 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </i>
    </section>`
  )
};