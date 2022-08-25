import axios from "axios";

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

export const fetchSingleArticle = (article_id) => {
  return fetch(
    `https://john-hutcheon-backend-project.herokuapp.com/api/articles/${article_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
};

export const addArticleVotes = (article_id) => {
  return axios
    .patch(
      `https://john-hutcheon-backend-project.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: 1 }
    )
    .then(({ data }) => {
      return data;
    });
};

export const minusArticleVotes = (article_id) => {
  return axios
    .patch(
      `https://john-hutcheon-backend-project.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: -1 }
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://john-hutcheon-backend-project.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};
