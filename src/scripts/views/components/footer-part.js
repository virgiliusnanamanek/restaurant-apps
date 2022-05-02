class Footerpart extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <footer class="footer">
            <p>Copyright © 2022 - Vicky Nana</p>
        </footer>
        `;
  }
}
customElements.define('footer-part', Footerpart);
