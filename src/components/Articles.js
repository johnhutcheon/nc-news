import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import dateFormat from "dateformat";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((article) => {
        setArticles(article);
        console.log(article);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  return (
    <ul>
      {articles.map((article) => {
        return (
          <div className="article-card">
            <div className="article-content"></div>
            <li>
              <h2>{article.title}</h2>
              <h3>Author: {article.author}</h3>
              <h4>{dateFormat(article.created_at, "mmmm dS, yyyy")}</h4>
              <h4>Votes: {article.votes}</h4>
              <h4>Comment Count: {article.comment_count}</h4>
            </li>
          </div>
        );
      })}
    </ul>
  );
};
export default Articles;
