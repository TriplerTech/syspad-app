import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, TextAreaField, SelectField } from '../FormFields';

const sale_types = [
  {
    value: '1',
    label: 'PreSale'
  },
  {
    value: '2',
    label: 'Private Sale'
  }
];

export default function TokenForm(props) {
  const {
    formField: {
      tokenAddress,
      description,
      sale_type
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
            name={sale_type.name}
            label={sale_type.label}
            data={sale_types}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaField name={description.name} label={description.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
