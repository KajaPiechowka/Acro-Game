import React from "react";
import MainPage from "./pages/MainPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import HowToPlayPage from "./pages/HowToPlayPage";
import GeneratedPage from "./pages/GeneratedPage";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <HashRouter>
      <Hero>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/how-to-play" component={HowToPlayPage} />
          <Route path="/generated" component={GeneratedPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Hero>
    </HashRouter>
  );
}

export default App;
