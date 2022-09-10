import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchSingleArticle,
  minusArticleVotes,
  addArticleVotes,
  fetchComments,
  deleteComment,
} from "../api";
import dateFormat from "dateformat";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import NewComment from "./NewComment";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [voteCount, setVoteCount] = useState(0);
  const [singleArticle, setSingleArticle] = useState([]);
  const [showComment, setShowComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const removeComment = (comment_id, article_id) => {
    deleteComment(comment_id).then(() => {
      navigate(0);
      console.log({ article_id });
    });
  };

  useEffect(() => {
    fetchSingleArticle(article_id).then((article) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
    fetchComments(article_id)
      .then((response) => {
        setShowComment(response.comments);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="article-card">
        <div className="article-content"></div>
        <h2>{singleArticle.articles.title}</h2>
        <h3>Author: {singleArticle.articles.author}</h3>
        <h4>{singleArticle.articles.body}</h4>
        <h4>
          {dateFormat(singleArticle.articles.created_at, "mmmm dS, yyyy")}
        </h4>
        <h4>
          <button onClick={increaseVote}>
            <FaRegThumbsUp />
          </button>{" "}
          Votes:
          {singleArticle.articles.votes + voteCount}{" "}
          <button onClick={decreaseVote}>
            <FaRegThumbsDown />
          </button>
        </h4>
        <h4>Comment Count: {singleArticle.articles.comment_count}</h4>
        <button className="comment-button">View Comments </button>
      </div>

      <NewComment setShowComment={setShowComment} showComment={showComment} />

      <div className="comment-card">
        <h2>Comments</h2>

        {showComment.map((comment) => {
          return (
            <>
              <div className="individual-comment">
                <h4>Author: {comment.author}</h4>
                <h4>{comment.body}</h4>
                <h4>{dateFormat(comment.created_at, "mmmm dS, yyyy")}</h4>
                <h4>Votes: {comment.votes}</h4>
                <button
                  onClick={() => {
                    removeComment(comment.comment_id);
                  }}
                  className="delete-comment-button"
                >
                  Delete Comment{" "}
                </button>
                <br></br>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleArticle;
