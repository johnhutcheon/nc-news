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
