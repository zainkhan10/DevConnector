import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/creators";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(({ auth }) => auth);

  const authLink = () => (
    <ul>
      <li>
        <a href="#!" onClick={() => dispatch(logoutUser())}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = () => (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {isAuthenticated ? authLink() : guestLinks()}
    </nav>
  );
};
export default Navbar;
