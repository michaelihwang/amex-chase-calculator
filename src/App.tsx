import React from 'react';
import StoreProvider from './Store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CompactHeader />
        <LandingView />
      </ThemeProvider>
    </StoreProvider>
  );
}