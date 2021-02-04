import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import i18n (needs to be bundled ;))
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
/**
 * Redux setup
 */

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./store/reducers";
import logger from "redux-logger";
import rootSaga from "./store/sagas";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

/**
 * index begin
 */

const AppLazy = lazy(() => import("./App"));

const style = {
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={style}>
            {" "}
            <Spin size="large" />{" "}
          </div>
        }
      >
        <React.StrictMode>
          <AppLazy />
        </React.StrictMode>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
