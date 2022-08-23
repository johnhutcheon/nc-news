import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import dateFormat from "dateformat";

const Cooking = () => {
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setCooking(data);
        console.log(data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  return (
    <ul>
      {cooking
        .filter((data) => {
          if (data.topic === "cooking") {
            return true;
          }
        })
        .map((data) => {
          return (
            <div className="article-card">
              <div className="article-content"></div>
              <li>
                <h2>{data.title}</h2>
                <h3>Author: {data.author}</h3>
                <h4>{dateFormat(data.created_at, "mmmm, dS, yyyy")}</h4>
                <h4>Votes: {data.votes}</h4>
                <h4>Comment Count: {data.comment_count}</h4>
              </li>
            </div>
          );
        })}
    </ul>
  );
};
export default Cooking;
