import "./App.css";
import { Routes, Route } from "react-router-dom";

import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
      </Routes>
    </div>
  );
}

export default App;
