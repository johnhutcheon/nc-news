import "./App.css";
import { Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";
import ErrorHandling from "./components/ErrorHandling";
import ErrorHandlingTwo from "./components/ErrorHandlingTwo";
import { CurrentUserContext } from "./context/currentUser";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics/:topic" element={<SingleTopic />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/*" element={<ErrorHandling />} />
          <Route path="/articles/*" element={<ErrorHandlingTwo />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
