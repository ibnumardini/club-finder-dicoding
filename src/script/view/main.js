import DataSource from "../data/data-source.js";

import "../components/index.js";

const main = (_) => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("clubs-list");

  const onButtonSearchClicked = async () => {
    try {
      const dataSource = new DataSource();
      const clubs = await dataSource.searchClub(searchElement.value);

      renderResult(clubs);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    clubListElement.articles = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
