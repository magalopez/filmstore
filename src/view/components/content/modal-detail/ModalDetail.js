import { button } from '../button/button.js';
import { validateFilm } from '../../../../controller/events/events.js';

export const modalDetail = (customClass) => {
  const modal = document.createElement("section");
  modal.classList.add("section-modal");
  modal.classList.add("overlay");
  modal.classList.add("hidden");
  if(customClass) modal.classList.add(customClass);

  let args =  window.location.hash.substr(2,  window.location.hash.length - 2);
  const route = args.split("/", 2)[0];
  const id = args.split("/", 2)[1];

  if(id) {
    const currentFilm = validateFilm(id);
    currentFilm
    .then(film => {
      const current = film.length ? film[0] : film;
      const {
        Title,
        Rating, Runtime, Year, Language, 
        Poster, Plot, Director, Genre, Actors, Production, imdbID, price } = current;
  
      const btnEvent = `addToCart('${imdbID}',${price})`;
      const btnText = "Add to card";
  
      const structureHTML = `
        <section class="modal-detail column">
          <section class="modal-detail-header row">
            <h1>${Title}</h1>
            <i class="icon-close icon" onclick={handleModalDetail()}>
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 4L12 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </section>
          <section class="modal-detail-body column">
            <section class="modal-detail-info-top row">
              <div class=" modal-detail-rating row">
                <i class="modal-detail-icon star">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#F1B418" stroke="#F1B418" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </i>
                <span>${Rating && Rating != "N/A" ? Rating : "0.0"}</span>
              </div>
              <p>${Runtime}</p>
              <p>${Year}</p>
              <p>${Language}</p> 
            </section>
            <section class="modal-detail-info-bottom row">
              <img src="${Poster === "N/A" ? "./assets/no-image.png" : Poster}" />
              <div class="modal-detail-info-bottom-all">
                <p class="overflow-ellipsis">${Plot}</p>
                ${Director != "N/A" ? "<p class='overflow-ellipsis'><b>Director: </b>"+Director+"</p>": ""}
                ${Genre != "N/A" ? "<p class='overflow-ellipsis'><b>Genre: </b>"+Genre+"</p>": ""}
                ${Actors != "N/A" ? "<p class='overflow-ellipsis'><b>Actors: </b>"+Actors+"</p>": ""}
                ${Production != "N/A" ? "<p class='overflow-ellipsis'><b>Production: </b>"+Production+"</p>": ""}
                <div class="modal-detail-button">
                  ${button(btnEvent, btnText, "btn-cyan")}
                </div>
              </div>
            </section>
          </section>
        </section>`;
    
        modal.innerHTML = structureHTML;
  
        if (route === "detail" && modal.classList.value.includes("hidden"))
        {
          modal.classList.remove("hidden");
          modal.classList.add("show");
        };
      });
    }
  return modal;       
};