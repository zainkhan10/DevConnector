import { Fragment } from "react";
import "./App.css";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
