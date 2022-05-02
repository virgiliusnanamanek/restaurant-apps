class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <!-- mobile navbar -->
      <div class="menu--mobile">
          <div class="menu__icon"><a href="#" class="menu__link">☰</a></div>
          <div class="menu__brand">Luwe Apps</div>
          <div class="menu__brand">&nbsp;</div>
      </div>
      <nav id="drawer" class="nav--mobile">
          <ul class="nav--mobile__list">
              <li class="nav__item--mobile"><a href="#/home">Home</a></li>
              <li class="nav__item--mobile"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item--mobile"><a href="https://github.com/virgiliusnanamanek" target="_blank" rel="noreferrer">About</a>
              </li>
          </ul>
      </nav>
      <!-- Desktop Navbar -->
      <nav class="nav--desk">
          <h1 class="nav__logo"><a href="#">Luwe Apps</a></h1>
          <ul class="nav__list">
              <li class="nav__item"><a href="#/home">Home</a></li>
              <li class="nav__item"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item"> <a href="https://github.com/virgiliusnanamanek" target="_blank" rel="noreferrer">About</a></li>
          </ul>
      </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
