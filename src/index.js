import React from "react";
import { Suspense } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyle";
import App from "./App";
import "./Grid/Grid.css";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import BackToTopBtn from "./components/backToTopBtn/BackToTopBtn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <Provider store={store}>
          <ScrollToTop />
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
          <BackToTopBtn />
        </Provider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
