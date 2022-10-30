class ClubsItem extends HTMLElement {
  #fanArt;
  #name;
  #description;
  #shadowRoot;

  constructor() {
    super();
    
    this.#shadowRoot = this.attachShadow({ mode: "open" });
  }

  set article({ fanArt, name, description }) {
    this.#fanArt = fanArt;
    this.#name = name;
    this.#description = description;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.#shadowRoot.innerHTML = `
    <img class="fan-art-club" src="${this.#fanArt}" alt="Fan Art">
    <div class="club-info">
      <h2>${this.#name}</h2>
      <p>${this.#description}</p>
    </div>`;

    this.#shadowRoot.prepend(this.style());
  }

  style() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "src/styles/clubitem.css";

    return link;
  }
}

customElements.define("clubs-item", ClubsItem);
