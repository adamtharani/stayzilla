import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import ResponsiveAppBar from '../components/ResponsiveAppBar';
import MainPageSearchBar from '../components/MainPageSearchBar';
import Copyright from '../components/Copyright';





import '../assets/index.css';

import roomPic from '../assets/roomPic.jpg';


export default function main() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <MainPageSearchBar />
      <HotelSearch />
    </React.Fragment>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function HotelSearch() {
  return (
   
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 6,
          }}
        >
          <Container>
          
      { <Typography sx={{color: "#1976d2", letterSpacing: "0.05em", textAlign: "center", fontSize: "84px",  fontFamily: "Lora"}}
            >
              Your Perfect Vacation
            </Typography>}
   

           
            <Typography sx={{color: "#262626", letterSpacing: "0.2em", textAlign: "center", fontSize: "24px",  fontFamily: "sans-serif", fontStyle: "italic", padding: "40px 0px"}}>
              is only one click away
            </Typography>
          
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>  */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card variant="outlined" style={{backgroundColor: '#e6f2ff'}}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', my: 1}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={roomPic}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{color: "#262626", letterSpacing: "0.12em", fontSize: "22px", fontWeight: "bold", fontFamily: "Lora", textTransform: "uppercase"}}>
                      Hotel Name
                    </Typography>

                    <Typography sx={{color: "#262626", letterSpacing: "0.1em", fontSize: "20px", fontWeight: "bold", fontStyle: "italic", fontFamily: "Lora", textTransform: "capitalize", paddingTop: "10px"}}>
                      City 
                    </Typography>
  
                    <Typography sx={{color: "#262626", letterSpacing: "0.05em", fontSize: "16px", fontWeight: "light", fontFamily: "sans-serif", textTransform: "capitalize", padding: "16px 0"}}>
                      Address
                    </Typography>

                    <Typography sx={{color: "#262626", letterSpacing: "0.05em", fontSize: "16px", fontWeight: "light", fontFamily: "sans-serif", textTransform: "capitalize", padding: "16px 0"}}>
                      Phone
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}