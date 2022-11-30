import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import FormPropsTextFields from '../components/MainPageSearch';
import Copyright from '../components/Copyright';

export default function main() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <WelcomeText />
      <FormPropsTextFields />
    </React.Fragment>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function WelcomeText() {
  return (
   <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" component="h4" gutterBottom>
          Welcome, "Dr. Hafeez"
        </Typography>
        <Typography variant="body1" component="body1" gutterBottom>
          {'Try searching for a city'}
        </Typography>
      </Container>
    </Box>
    
  );
}

