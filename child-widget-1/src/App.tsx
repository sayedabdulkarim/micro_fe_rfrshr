import { Provider } from "react-redux";
import Multiplier from "./Multiplier";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Multiplier />
    </Provider>
  );
};

export default App;
