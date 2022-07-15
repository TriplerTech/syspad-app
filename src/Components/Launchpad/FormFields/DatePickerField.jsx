import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
    }
  }, [value]);

  return (
    <Grid container>
      <TextField
        type="datetime-local"
        {...field}
        {...props}
        value={selectedDate}
        defaultValue="2022-07-15T00:00"
        error={isError}
        invalidDateMessage={isError && error}
        helperText={isError && error}
      />
    </Grid>
  );
}
