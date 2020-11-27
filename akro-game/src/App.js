import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import GeneratedPage from "./pages/GeneratedPage";
import Hero from "./components/Hero/Hero";
import SettingsContext from "./assets/context/SettingsContext";

function App() {
  const [context, setContext] = useState({ difficulty: "1", poses: "10" });

  return (
    <SettingsContext.Provider value={{ context, setContext }}>
      <HashRouter>
        <Hero>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/generated" component={GeneratedPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Hero>
      </HashRouter>
    </SettingsContext.Provider>
  );
}

export default App;
