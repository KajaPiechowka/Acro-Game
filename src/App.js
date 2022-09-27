import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// MATERIAL-UI

import { ThemeProvider, createTheme } from '@mui/material';
import { blue, red, yellow } from '@mui/material/colors';

// CUSTOM COMPONENTS

import MainPage from './pages/MainPage';
import PageNotFound from './pages/404';
import GeneratedPage from './pages/GeneratedPage';
import Hero from './components/Hero/Hero';
import SettingsContext from './assets/context/SettingsContext';
import Footer from './components/Footer/Footer';

const customTheme = createTheme({
  palette: {
    primary: blue,
    secondary: yellow,
    error: red,
  },
});

function App() {
  const [context, setContext] = useState({ difficulty: '1', poses: '10' });

  return (
    <SettingsContext.Provider value={{ context, setContext }}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Hero>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/generated" component={GeneratedPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Hero>
        </BrowserRouter>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}

export default App;
