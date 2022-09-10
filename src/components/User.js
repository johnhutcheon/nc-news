import { useContext } from "react";
import { CurrentUserContext } from "../context/currentUser";

const User = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return <span id="userID"> Logged in as: {currentUser.name} </span>;
};

export default User;
