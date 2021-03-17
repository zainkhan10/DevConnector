import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import MyAlert from "./components/layout/Alert";
import { getFromLocal } from "./utils/cache";
import { setAuthToken } from "./utils/authToken";
import "./App.css";
import { loadUser } from "./store/actions/creators";

const token = getFromLocal("token");
if (token) {
  setAuthToken(token);
}

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <section className="container">
          <MyAlert id="1" msg="testting" alertType="danger"></MyAlert>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default Routes;
