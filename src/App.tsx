import { AppHeader } from "./components/AppHeader";
import { AppMain } from "./components/AppMain";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import "./css/style.css";

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppHeader />
      <AppMain />
    </Provider>
  );
};

export default App;
