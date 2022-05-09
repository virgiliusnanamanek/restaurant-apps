import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mediaquery.css';
import App from './views/app';
import './views/components/nav-bar';
import './views/components/hero-part';
import './views/components/footer-part';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.menu__link'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
