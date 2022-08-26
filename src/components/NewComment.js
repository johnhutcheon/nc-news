import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const NewComment = ({ setShowComment, showComment }) => {
  //setShowComment and showComment are being brought in so we can update those states when new comment added
  const [addComment, setAddComment] = useState("");
  const { article_id } = useParams();

  const onSubmit = (event) => {
    event.preventDefault();
    const optimisticComment = {
      body: addComment,
      votes: 0,
    };
    <h1>New comment added!</h1>;

    setShowComment([optimisticComment, ...showComment]);
    postComment(article_id, addComment);
    console.log("I have been clicked");
    setAddComment("");
  };

  return (
    <>
      <h2>Post a new comment</h2>

      <form onSubmit={onSubmit}>
        <textarea
          rows="6"
          cols="50"
          value={addComment}
          onChange={(event) => setAddComment(event.target.value)}
        ></textarea>
        <br></br>
        <input type="submit" value="Post comment" />
      </form>
    </>
  );
};

export default NewComment;
