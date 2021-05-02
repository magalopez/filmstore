export const CardCart = (image, title, year = null) => {
  
  return (
    `<section class="card-cart row">
      <img class="card-cart-image"src="${image === "N/A" ? "./assets/no-image.png" : image}" />
      <div class="card-cart-info">
        <h1 class="overflow-ellipsis">${title}</h1>
        ${year && "<p>" + year + "</p>"}
      </div>
      <i class="icon-close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 4L12 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </i>
    </section>`
  )
};