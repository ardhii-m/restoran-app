import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import App from './views/app.js';

const BASE_URL = 'https://restaurant-api.dicoding.dev';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  hero: document.querySelector('.hero'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});
