import "./App.css";
import { Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleTopic from "./components/SingleTopic";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<SingleTopic />} />
      </Routes>
    </div>
  );
}

export default App;
