export const fetchArticles = () => {
  return fetch(
    "https://john-hutcheon-backend-project.herokuapp.com/api/articles"
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return fetch(
    `https://john-hutcheon-backend-project.herokuapp.com/api/articles?topic=${topic}`
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
};
