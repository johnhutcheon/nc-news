import axios from "axios";

export const fetchArticles = (slug, sortBy, orderBy) => {
  // passing these in for sort by method
  return axios
    .get("https://john-hutcheon-backend-project.herokuapp.com/api/articles", {
      params: { topic: slug, sortBy: sortBy, orderBy: orderBy },
    })
    .then(({ data }) => {
      return data;
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

export const postComment = (article_id, body) => {
  console.log(body, "in the API");

  return axios
    .post(
      `https://john-hutcheon-backend-project.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username: "jessjelly",
        body: body,
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://john-hutcheon-backend-project.herokuapp.com/api/comments/${comment_id}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchUserList = () => {
  return axios
    .get("https://john-hutcheon-backend-project.herokuapp.com/api/users")
    .then((res) => {
      return res.data;
    });
};
