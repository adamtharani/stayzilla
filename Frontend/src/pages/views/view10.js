import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

export default function View10() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <View10Body />
    </React.Fragment>
  );
}

const rows: GridRowsProp = [
    { id: 1, col1: 'Home', col2: '/', col3: 'Stayzilla Homepage' },
    { id: 2, col1: 'Search Results', col2: '/result', col3: 'Displays hotels queried from DBMS' },
    { id: 3, col1: 'Billing', col2: '/billing', col3: 'Allows customer to enter Billing details' },
    { id: 4, col1: 'Login', col2: '/login', col3: 'Login portal' },
    { id: 5, col1: 'Sign Up', col2: '/register', col3: 'Account registration page' },
    { id: 6, col1: 'Forgot Password', col2: '/forgot', col3: 'Allows users to reset their account password' },
    { id: 7, col1: 'Terms of Service', col2: '/TOS', col3: 'Stayzilla Terms of Service' },
  ];


const columns: GridColDef[] = [
  { field: 'col1', headerName: 'View Name', width: 200 },
  { field: 'col2', headerName: 'Link', width: 200 },
  { field: 'col3', headerName: 'Description', width: 200 },
];

function View10Body() {
  return (
    <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 50, height: 650, width: 600, }}>
        <Typography variant="h5" color="inherit" noWrap>
            View 10: 
        </Typography>
        <DataGrid 
            sx={{ mt: 2 }}
            rows={rows}
            columns={columns} 
            pageSize={10}
            rowsPerPageOptions={[5]}
        />
    </div>
  )
}
