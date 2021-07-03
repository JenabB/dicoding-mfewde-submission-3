class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <p>copyright &#169 2021 - Ziva Resto</p>
            </footer>
        `;
  }
}

customElements.define("app-footer", AppFooter);
