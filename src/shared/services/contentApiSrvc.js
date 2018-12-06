import appConfig from '../config/apiConfig';

const getArticles = () =>
  fetch(appConfig.ARTICLES_URL)
    .then(response => response.json());

export default {
  getArticles
};
