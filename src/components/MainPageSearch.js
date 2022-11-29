import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';




export default function FormPropsTextFields() {
  return (
    <Container 
      maxWidth="md"
      sx={{
        border: 1, 
        borderColor: 'grey.500', 
        borderRadius: 1, mt: 2, mb: 2, p: 2,
        backgroundColor: 'grey.50',
      }}
      >
      <Grid container spacing={3}>
        <Grid md={4}>
          <TextField
            city_search
            id="filled-required"
            label="City Search"
            fullWidth
          />
        </Grid>
        <Grid md>
          <TextField
            city_search
            id="filled-required"
            label="Date"
            defaultValue="Toronto"
            variant="filled"
          />
        </Grid>
        <Grid md>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-in"
              /*value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}*/
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid md>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check-out"
                /*value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}*/
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
