import { initRouter } from './controller/router/router.js';
import "./controller/events/events.js";

window.addEventListener('load', () => {
  initRouter();
});