import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

const AllArticles = () => {
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
            <li>
              <h2>{article.title}</h2>
              <h3>Author: {article.author}</h3>
              <div className="article-body">
                <h4>{article.body}</h4>
              </div>
              <h4>Votes: {article.votes}</h4>
              <h4>Comment Count: {article.comment_count}</h4>
            </li>
          </div>
        );
      })}
    </ul>
  );
};
export default AllArticles;
