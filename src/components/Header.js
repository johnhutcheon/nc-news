import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>John Hutcheon News 👁</h1>
      </div>
      <br></br>
      <div className="est">est 2022</div>

      <section>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/articles"> Articles </Link>
          {" | "}
          <Link to="/topics/football"> Football </Link>
          {" | "}
          <Link to="/topics/coding"> Coding </Link>
          {" | "}
          <Link to="/topics/cooking"> Cooking </Link>
        </nav>
      </section>
    </>
  );
};

export default Header;
