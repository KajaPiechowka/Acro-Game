import React from "react";
import Main from "./components/Main/Main";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import HowToPlayPage from "./pages/HowToPlayPage";
import GeneratedPage from "./pages/GeneratedPage";
import Hero from "./pages/MainPage";

function App() {
  return (
    <HashRouter>
      <Hero>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/how-to-play" component={HowToPlayPage} />
          <Route path="/generated" component={GeneratedPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Hero>
    </HashRouter>
  );
}

export default App;
