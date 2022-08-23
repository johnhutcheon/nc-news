import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const SingleTopic = () => {
  const { topic } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticlesByTopic(topic)
      .then((article) => {
        setIsLoading(true);
        setSingleTopic(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {singleTopic.map((article) => {
        return (
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
        );
      })}
    </ul>
  );
};

export default SingleTopic;
