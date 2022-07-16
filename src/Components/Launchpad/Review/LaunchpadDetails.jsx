import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const products = [
  { name: 'Project Name', value: 'SYSPAD PrivateSale' },
  { name: 'Total token', value: '100,000,000' },
  { name: 'Factory Address', value: '0x569533592d84171fB6c86Ac484a8Dc732a79c814' },
  { name: 'Token name', value: 'SYSPAD' },
  { name: 'Token symbol', value: 'TSYSPAD' },
  { name: 'Token decimals', value: '18' },
  { name: 'Token description', value: '' },
  { name: 'Private sale rate', value: '1000' },
  { name: 'Softcap', value: '1000' },
  { name: 'Hardcap', value: '2000' },
  { name: 'Unsold tokens', value: 'Refund' },
  { name: 'Minimum buy', value: '10' },
  { name: 'Maximum buy', value: '100' },
  { name: 'Start time', value: '2022-07-16 00:00' },
  { name: 'End time', value: '2022-07-17 00:00' },
  { name: 'Website', value: '' },
  { name: 'Facebook', value: '' },
  { name: 'Twitter', value: '' },
  { name: 'Telegram', value: '' },
  { name: 'Github', value: '' },
  { name: 'Instagram', value: '' },
  { name: 'Discord', value: '' },
  { name: 'Reddit', value: '' },
  { name: 'Description', value: '' },
  { name: 'Using Team Vesting', value: 'Yes' },
];

function LaunchpadDetails() {
  const classes = useStyles();
  return (
    <List disablePadding>
      {products.map(product => (
        <ListItem className={classes.listItem} key={product.name}>
          <ListItemText primary={product.name} />
          <Typography variant="body2">{product.value}</Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default LaunchpadDetails;
