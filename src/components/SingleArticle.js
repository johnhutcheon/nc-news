import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle, minusArticleVotes, addArticleVotes } from "../api";
import dateFormat from "dateformat";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [voteCount, setVoteCount] = useState(0);
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const increaseVote = () => {
    setVoteCount((currVotes) => currVotes + 1);
    addArticleVotes(article_id).catch((err) => {
      alert("Sorry, something went wrong. Please try again later.");
    });
  };

  const decreaseVote = () => {
    setVoteCount((currVotes) => currVotes - 1);
    minusArticleVotes(article_id).catch((err) => {
      alert("Sorry, something went wrong. Please try again later.");
    });
  };

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((article) => {
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
      <h4>
        <button onClick={increaseVote}>+</button> Votes:
        {singleArticle.articles.votes + voteCount}{" "}
        <button onClick={decreaseVote}>-</button>
      </h4>
      <h4>Comment Count: {singleArticle.articles.comment_count}</h4>
    </div>
  );
};

export default SingleArticle;
