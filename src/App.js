import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, Box, CssBaseline } from '@material-ui/core';

import theme from './theme/theme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'containers/Home/Home';
import Revolution from 'containers/Revolution/Revolution';
import Services from 'components/Services/Services';
import CustomSoftwareDevelopment from 'components/Services/CustomSoftwareDevelopment/CustomSoftwareDevelopment';
import AndroidAppDdevelopment from 'components/Services/AndroidAppDdevelopment/AndroidAppDdevelopment';
import WebDevelopment from 'components/Services/WebDevelopment/WebDevelopment';
import Contact from 'components/Contact/Contact';
import About from 'components/About/About';
import Estimate from 'components/Estimate/Estimate';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const App = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          <Header
            value={value} 
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Box component="main">
            <Switch> 
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                path="/services"
                render={(props) => (
                  <Services
                    {...props}
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                path="/customsoftware"
                render={() => (
                  <CustomSoftwareDevelopment
                    {...props}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                path="/mobileapps"
                render={() => (
                  <AndroidAppDdevelopment
                    {...props}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                path="/websites"
                render={() => (
                  <WebDevelopment
                    {...props}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />

              <Route
                path="/revolution"
                render={() => <Revolution {...props} setValue={setValue} />}
              />
              <Route path="/about" component={About} />
              <Route
                path="/contact"
                render={(props) => <Contact {...props} setValue={setValue} />}
              />
              <Route
                path="/estimate"
                render={(props) => (
                  <Estimate
                    {...props}
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
            </Switch>
          </Box>
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
