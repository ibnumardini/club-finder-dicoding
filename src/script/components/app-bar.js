class AppBar extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.#shadowRoot.innerHTML = `<h2>Club Finder</h2>`;

    this.#shadowRoot.prepend(this.style());
  }

  style() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "src/styles/appbar.css";

    return link;
  }
}

customElements.define("app-bar", AppBar);
