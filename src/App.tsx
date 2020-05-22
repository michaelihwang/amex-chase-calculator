import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { GlobalStateContainer } from './GlobalStateContainer';

import CompactHeader from './components/CompactHeader';
import LandingView from './views/home/LandingView';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002663',
    },
    secondary: {
      main: '#4d4f53',
    },
  },
  typography: {
    fontFamily: ['Open Sans'].join(','),
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateContainer.Provider>
        <CompactHeader title={'Amex vs. Chase'} />
        <LandingView />
      </GlobalStateContainer.Provider>
    </ThemeProvider>
  );
}