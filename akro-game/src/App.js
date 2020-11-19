import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import HowToPlayPage from "./pages/HowToPlayPage";
import GeneratedPage from "./pages/GeneratedPage";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <Hero>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/how-to-play" component={HowToPlayPage} />
          <Route path="/generated" component={GeneratedPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Hero>
    </BrowserRouter>
  );
}

export default App;
