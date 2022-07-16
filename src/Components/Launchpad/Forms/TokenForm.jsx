import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, TextAreaField, SelectField } from '../FormFields';

const networks = [
  {
    value: '1',
    label: 'SYSCOIN'
  },
];

export default function TokenForm(props) {
  const {
    formField: {
      tokenAddress,
      network
    }
  } = props;
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={tokenAddress.name} label={tokenAddress.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
        <SelectField
            name={network.name}
            label={network.label}
            data={networks}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
