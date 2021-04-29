import ReactDom from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
