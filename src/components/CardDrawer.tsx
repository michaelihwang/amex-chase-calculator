import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

interface CardDrawerProps {
  open: boolean;
  toggle: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

// placeholder
const AMEX = ['Platinum Schwab', 'Platinum', 'Gold', 'Blue Business Plus'];
const CHASE = ['Sapphire Reserve', 'Sapphire Preferred', 'Freedom Flex', 'Freedom Unlimited'];

export default function CardDrawer({ open, toggle }: CardDrawerProps) {
  const classes = useStyles();
  return (
    <Drawer open={open} onClose={toggle(false)}>
      <Box
        className={clsx(classes.list)}
        role="presentation"
        onClick={() => { console.log('hello'); }}
        onKeyDown={toggle(false)}
      >
        <List>
          <ListSubheader>American Express</ListSubheader>
          {AMEX.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><CreditCardIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListSubheader>Chase</ListSubheader>
          {CHASE.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><CreditCardIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}