import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle } from "../api";
import dateFormat from "dateformat";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((article) => {
        setIsLoading(true);
        setSingleArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  console.log(singleArticle);
  return (
    <div className="article-card">
      <div className="article-content"></div>
      <h2>{singleArticle.articles.title}</h2>
      <h3>Author: {singleArticle.articles.author}</h3>
      <h4>{singleArticle.articles.body}</h4>
      <h4>{dateFormat(singleArticle.articles.created_at, "mmmm dS, yyyy")}</h4>
      <h4>Votes: {singleArticle.articles.votes}</h4>
      <h4>Comment Count: {singleArticle.articles.comment_count}</h4>
    </div>
  );
};

export default SingleArticle;
