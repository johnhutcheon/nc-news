import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";
import { GiCook } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import User from "./User";
// import UserList from "./UserList";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>
          John<br></br> Hutcheon<br></br> News
        </h1>
      </div>
      <br></br>
      <div className="est">est 2022</div>

      <section>
        <nav>
          <IoIosHome />
          <Link to="/">Home</Link>
          {" | "}
          <MdArticle />
          <Link to="/articles"> Articles </Link>
          {" | "}
          <BiFootball />
          <Link to="/topics/football"> Football </Link>
          {" | "}
          <HiDesktopComputer />
          <Link to="/topics/coding"> Coding </Link>
          {" | "}
          <GiCook />
          <Link to="/topics/cooking"> Cooking </Link>
          <br></br>
          <br></br>
          <FaUserAlt />
          <br></br>
          <User />
          {/* <UserList /> */}
        </nav>
      </section>
    </>
  );
};

export default Header;
