class ContentSection extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <section class="content__section">
            <div class="section__inner">
                <h1 class="section__title">Explore Restaurant</h1>
                <div class="content__list" id="contentlist"></div>
            </div>
        </section>
        `;
  }
}
customElements.define('content-section', ContentSection);
