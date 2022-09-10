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
      //   author: "jessjelly",
      body: addComment,
      votes: 0,
    };

    setShowComment([optimisticComment, ...showComment]);
    alert("Comment posted");
    postComment(article_id, addComment); //// addComment is the body (passed through the API) as we're updating this in the form below
    console.log("I have been clicked");
    setAddComment("");
  };

  return (
    <>
      <section className="new-comments">
        <h2>Post a new comment</h2>

        <form onSubmit={onSubmit}>
          <textarea
            rows="6"
            cols="100"
            value={addComment}
            onChange={(event) => setAddComment(event.target.value)} /// updating addComment to be whatever is posted in the input box
          ></textarea>
          <br></br>
          <input type="submit" value="Post comment" />
        </form>
      </section>
    </>
  );
};

export default NewComment;
