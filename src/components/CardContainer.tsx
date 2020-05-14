import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F6F6F6F6',
    color: '#000000',
    borderRadius: 10,
    flexGrow: 1,
    minHeight: 300,
    height: 'auto',
    padding: 10,
  },
}));

interface CardContainerProps {
  children?: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  );
}