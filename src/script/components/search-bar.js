class SearchBar extends HTMLElement {
  #clickEvent;
  #shadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.#clickEvent = event;
    this.render();
  }

  get value() {
    return this.#shadowRoot.querySelector("#searchElement").value;
  }

  render() {
    this.#shadowRoot.innerHTML = `
    <div id="search-container" class="search-container">
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
    </div>`;

    this.#shadowRoot.prepend(this.style());

    this.#shadowRoot
      .querySelector("#searchButtonElement")
      .addEventListener("click", this.#clickEvent);
  }

  style() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "src/styles/searchbar.css";

    return link;
  }
}

customElements.define("search-bar", SearchBar);
