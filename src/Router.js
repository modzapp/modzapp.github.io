import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import App from "./App/App";
import Faq from "./Views/Faq";
import Terms from "./Views/Terms";
import Privacy from "./Views/Policy";

export const Router = () => {
  return (
    <BrowserRouter>
        <Route path="/" component={App} exact/>
        <Route path="/faq" component={Faq} />
        <Route path="/terms" component={Terms} />
        <Route path="/policy" component={Privacy} />
    </BrowserRouter>
  );
}