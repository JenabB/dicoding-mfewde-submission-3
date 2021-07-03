class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="jumbotron">
                <div class="jumbotron__inner">
                <h1 class="jumbotron__title">Ziva Resto</h1>
                <p class="jumbotron__tagline">Various kinds of restaurant catalogs from various places</p>
                <a href="#content" class="jumbotron-button">Let's Check!</a>
                </div>
            </div>
        `;
  }
}

customElements.define("app-jumbotron", AppJumbotron);
