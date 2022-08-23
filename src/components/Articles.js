import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const handleChange = (event) => {
  //   console.log(event.target);
  //   setArticles(event.target.value);
  // };

  useEffect(() => {
    fetchArticles()
      .then((article) => {
        setIsLoading(true);
        setArticles(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {articles.map((article) => {
        return (
          <>
            <Link to={`/articles/${article.article_id}`}>
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
            </Link>
          </>
        );
      })}
    </ul>
  );
};
export default Articles;
