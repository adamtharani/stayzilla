import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Pages() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <PagesBody />
    </React.Fragment>
  );
}

const view_rows: GridRowsProp = [
  { id: 1, col1: 'View 1', col2: '/view1', col3: 'Displays the city name, hotel id and hotel chain id for each hotel.' },
  { id: 2, col1: 'View 2', col2: '/view2', col3: 'Count the number of rooms with the same cost and group them by type. Display the room cost, the number of rooms with that cost, and their room type.' },
  { id: 3, col1: 'View 3', col2: '/view3', col3: 'Displaying most expensive rooms per room type.' },
  { id: 4, col1: 'View 4', col2: '/view4', col3: 'Displaying all hotel ids and account ids even if the hotels do not connect to any accounts or the accounts havent made bookings for a hotel.' },
  { id: 5, col1: 'View 5', col2: '/view5', col3: 'Selecting all hotels in a city under a certain hotel chain. Allows the owner of a chain to see the hotels in a specified city' },
  { id: 6, col1: 'View 6', col2: '/view6', col3: 'All bookings with check in dates in the current month.' },
  { id: 7, col1: 'View 7', col2: '/view7', col3: 'All bookings with check out dates in the current month.' },
  { id: 8, col1: 'View 8', col2: '/view8', col3: 'Show all accounts.' },
  { id: 9, col1: 'View 9', col2: '/view9', col3: 'Count of rooms per hotel.' },
  { id: 10, col1: 'View 10', col2: '/view10', col3: 'Show Hotel Name and Province its Located in.' },
];

const page_rows: GridRowsProp = [
    { id: 1, col1: 'Home', col2: '/', col3: 'Stayzilla Homepage' },
    { id: 2, col1: 'Search Results', col2: '/result', col3: 'Displays hotels queried from DBMS' },
    { id: 3, col1: 'Billing', col2: '/billing', col3: 'Allows customer to enter Billing details' },
    { id: 4, col1: 'Login', col2: '/login', col3: 'Login portal' },
    { id: 5, col1: 'Sign Up', col2: '/register', col3: 'Account registration page' },
    { id: 6, col1: 'Forgot Password', col2: '/forgot', col3: 'Allows users to reset their account password' },
    { id: 7, col1: 'Terms of Service', col2: '/TOS', col3: 'Stayzilla Terms of Service' },
  ];


const view_columns: GridColDef[] = [
  { field: 'col1', headerName: 'View Name', width: 150 },
  { field: 'col2', headerName: 'Link', width: 150 },
  { field: 'col3', headerName: 'Description', width: 750 },
];
  
const page_columns: GridColDef[] = [
    { field: 'col1', headerName: 'Page Name', width: 150 },
    { field: 'col2', headerName: 'Link', width: 150 },
    { field: 'col3', headerName: 'Description', width: 350 },
];


function PagesBody() {
  return (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <div style={{ height: 650, width: 1200, marginBottom: 50 }}>
        <Typography variant="h5" color="inherit" noWrap>
          Ten DBMS Views
        </Typography>
        <DataGrid 
            sx={{ mt: 2 }}
            rows={view_rows}
            columns={view_columns} 
            pageSize={10}
            rowsPerPageOptions={[5]}
        />
      </div>
      <div style={{ height: 1200, width: 702 }}>
        <Typography variant="h5" color="inherit" noWrap>
          Web Pages
        </Typography>
        <DataGrid 
            sx={{ mt: 2 }}
            rows={page_rows}
            columns={page_columns} 
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
      </div>
    </div>
  )
}