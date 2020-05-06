import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, IconButton, Link, Toolbar, Typography
} from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

interface AboutDialogProps {
  open: boolean;
  onClose: () => void;
}

function AboutDialog({ open, onClose }: AboutDialogProps) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>About</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hey! I'm <Link className={classes.link} href="https://michaelihwang.com">Michael</Link>&nbsp;
          <span aria-label="wave" role="img">👋🏼</span>
        </DialogContentText>
        <DialogContentText>
          I built this calculator so that it may help you evaluate the Amex
          Trifecta and the Chase Trifecta based on your lifestyle and spending
          habbits.
        </DialogContentText>
        <DialogContentText>
          Feel free to use it and share with it with others!
        </DialogContentText>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default function CompactHeader() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar className={classes.root} color="primary" position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit">
          <CreditCardIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Amex vs. Chase
          </Typography>
        <Button color="inherit" onClick={handleClickOpen}>
          About
        </Button>
        <IconButton edge="end" color="inherit" href="https://github.com/michaelihwang/amex-chase-calculator">
          <GitHubIcon />
        </IconButton>
        <AboutDialog open={openDialog} onClose={handleClickClose} />
      </Toolbar>
    </AppBar>
  );
}