import "./App.css";
import { Routes, Route } from "react-router-dom";

import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import Home from "./components/Home";
import Football from "./components/Football";
import Cooking from "./components/Cooking";
import Coding from "./components/Coding";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/topics/football" element={<Football />} />
        <Route path="/topics/cooking" element={<Cooking />} />
        <Route path="/topics/coding" element={<Coding />} />
      </Routes>
    </div>
  );
}

export default App;
