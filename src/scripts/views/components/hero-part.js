class HeroPart extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__greeting">Welcome</h1>
                <h3 class="hero__header">Find your favorite restaurants</h3>
            </div>
        </div>
        `;
  }
}
customElements.define('hero-part', HeroPart);
