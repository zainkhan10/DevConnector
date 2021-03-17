import { Provider } from "react-redux";
import Routes from "./Routes";
import { ConfigureStore } from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={ConfigureStore()}>
      <Routes />
    </Provider>
  );
};

export default App;
