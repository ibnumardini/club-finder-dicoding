import "./clubs-item.js";

class ClubsList extends HTMLElement {
  #articles;
  #shadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "open" });
  }

  set articles(articles) {
    this.#articles = articles;
    this.render();
  }

  render() {
    this.#shadowRoot.innerHTML = "";

    this.#shadowRoot.prepend(this.style());

    for (const article of this.#articles) {
      const clubsItemEl = document.createElement("clubs-item");
      clubsItemEl.article = article;

      this.#shadowRoot.appendChild(clubsItemEl);
    }
  }

  renderError(message) {
    this.#shadowRoot.innerHTML = "";
    this.#shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`;

    this.#shadowRoot.prepend(this.style());
  }

  style() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "src/styles/clublist.css";

    return link;
  }
}

customElements.define("clubs-list", ClubsList);
