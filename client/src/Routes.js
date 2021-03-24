import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { loadUser } from "./store/actions/creators";
import { getFromLocal } from "./utils/cache";
import { setAuthToken } from "./utils/authToken";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

const token = getFromLocal("token");
if (token) {
  setAuthToken(token);
}

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <section className="container">
          <Alert id="1" msg="testting" alertType="danger"></Alert>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:id" component={Profile} />
            <PrivateRoutes component={protectedRoutes} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return <Redirect to="/" />;
        else return <Component {...props} />;
      }}
    />
  );
};

export const protectedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/create-profile" component={CreateProfile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/add-experience" component={AddExperience} />
      <Route exact path="/add-education" component={AddEducation} />
    </Switch>
  );
};

export default Routes;
