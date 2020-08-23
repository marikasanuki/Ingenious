import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from './app';
import ScrollToTop from './header_bar/scroll_to_top'; 

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <ScrollToTop/>
        <App />
    </HashRouter>
  </Provider>
);

export default Root;