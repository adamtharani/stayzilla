import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import MainPageSearchBar from '../components/MainPageSearchBar';
import Copyright from '../components/Copyright';

import Link from '@mui/material/Link';

export default function main() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <WelcomeText />
      <MainPageSearchBar />
      <RegisterTOS />
      <Futter />
    </React.Fragment>
  );
}

function RegisterTOS(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/TOS">
        Terms of Service
      </Link>{' '}
      {'.'}
    </Typography>
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
      <Typography sx={{color: "#1976d2", textAlign: "center", letterSpacing: "0.05em", fontSize: "60px",  fontFamily: "Lora", paddingTop: "60px"}}>
          Welcome, "Dr. Hafeez"
        </Typography>
        <Typography sx={{color: "#262626", letterSpacing: "0.2em", textAlign: "center", fontSize: "24px",  fontFamily: "sans-serif", paddingTop: "40px"}}>
          {'Try searching for a city'}
        </Typography>
      {/* <Container component="main" sx={{ mt: 8, mb: 2}} maxWidth="sm">
 
      
      </Container> */}
    </Box>
    
  );
}

function Futter() {
  return (
    
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Copyright />
    </Box>
    
  );
}





