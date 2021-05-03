
export const Header = (options, current, customClass) => {
  const header = document.createElement("header");
  header.classList.add("header-bg")
  if(customClass) header.classList.add(customClass);

  const renderOptionNav = (options, current) => {
    let structureHTML = "";
    options.forEach(element => {
      structureHTML += `<li><a href="#/${element.toLowerCase()}" class="${current === element ? "active": ""}">${element}</a></li>`
    });
    return structureHTML;
  };
  
  const structureHTML = `<nav class="header container">
                          <ul class="header-options row">
                            ${renderOptionNav(options, current)}
                          </ul>
                          <section class="row">
                            <i class="header-icon search">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 14L11.1 11.1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </i>
                            <i class="header-icon" onclick={handleCart()}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                  <path d="M6.00004 14.6666C6.36823 14.6666 6.66671 14.3682 6.66671 14C6.66671 13.6318 6.36823 13.3333 6.00004 13.3333C5.63185 13.3333 5.33337 13.6318 5.33337 14C5.33337 14.3682 5.63185 14.6666 6.00004 14.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M13.3333 14.6666C13.7015 14.6666 14 14.3682 14 14C14 13.6318 13.7015 13.3333 13.3333 13.3333C12.9651 13.3333 12.6666 13.6318 12.6666 14C12.6666 14.3682 12.9651 14.6666 13.3333 14.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M0.666626 0.666687H3.33329L5.11996 9.59335C5.18092 9.90028 5.3479 10.176 5.59166 10.3722C5.83541 10.5684 6.14042 10.6727 6.45329 10.6667H12.9333C13.2462 10.6727 13.5512 10.5684 13.7949 10.3722C14.0387 10.176 14.2057 9.90028 14.2666 9.59335L15.3333 4.00002H3.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect width="16" height="16" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            </i>
                          </section>
                        </nav>`;

  header.innerHTML = structureHTML;
  return header;
};