import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import { ConfigureStore } from "./store";

const App = () => {
  return (
    <Provider store={ConfigureStore()}>
      <Router>
        <Fragment>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
