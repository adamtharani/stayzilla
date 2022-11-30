import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import MainPageSearchBar from '../components/MainPageSearchBar';

export default function main() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <WelcomeText />
      <MainPageSearchBar />
    </React.Fragment>
  );
}


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

