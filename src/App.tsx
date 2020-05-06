import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

import CompactHeader from './components/CompactHeader';

interface Card {
  bank: string;
  name: string;
  annualFee: number;
  selected: boolean;
}

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
    fontFamily: ['Open Sans'].join(","),
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CompactHeader />
      <Container className={classes.root}>
        hello world
      </Container>
    </ThemeProvider>
  );
}

