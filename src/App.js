import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
