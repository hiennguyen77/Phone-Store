import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyle";
import App from "./App";
import "./Grid/Grid.css";
import store from "./redux/store";
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
          <App />
          <BackToTopBtn />
        </Provider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
