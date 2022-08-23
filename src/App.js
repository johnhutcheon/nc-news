import "./App.css";
import { Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<SingleTopic />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
