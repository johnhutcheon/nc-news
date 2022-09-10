import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import dateFormat from "dateformat";
import { Link, useParams } from "react-router-dom";
import SortBy from "./SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrderBy] = useState("ASC");
  const { slug } = useParams;

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(slug, sortBy, order)
      .then((article) => {
        console.log(article);
        setArticles(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [slug, sortBy, order]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      <SortBy setOrderBy={setOrderBy} setSortBy={setSortBy} />

      {articles.map((article) => {
        return (
          <>
            <Link to={`/articles/${article.article_id}`}>
              <div className="article-card">
                <div className="article-content"></div>
                <li>
                  <h1>{article.title}</h1>
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
